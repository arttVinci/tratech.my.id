package usecase

import (
	"context"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
	"tratech.my.id/server/internal/entity"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/model/converter"
	"tratech.my.id/server/internal/repository"
)

type ProfileUseCase struct {
	db             *gorm.DB
	log            *logrus.Logger
	validate       *validator.Validate
	profileRepo    *repository.ProfileRepository
	achivRepo      *repository.AchievementRepository
	projectRepo    *repository.ProjectRepository
	educatinRepo   *repository.EducationRepository
	experienceRepo *repository.ExperienceRepository
}

func NewProfileUseCase(
	db *gorm.DB,
	log *logrus.Logger,
	validate *validator.Validate,
	profileRepo *repository.ProfileRepository,
	achivRepo *repository.AchievementRepository,
	projectRepo *repository.ProjectRepository,
	educatinRepo *repository.EducationRepository,
	experienceRepo *repository.ExperienceRepository,
) *ProfileUseCase {
	return &ProfileUseCase{
		db:             db,
		log:            log,
		validate:       validate,
		profileRepo:    profileRepo,
		achivRepo:      achivRepo,
		projectRepo:    projectRepo,
		educatinRepo:   educatinRepo,
		experienceRepo: experienceRepo,
	}
}

func (c *ProfileUseCase) Create(ctx context.Context, request *model.CreateProfileRequest) (*model.ProfileResponse, error) {
	tx := c.db.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.validate.Struct(request); err != nil {
		c.log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	profile := &entity.Profile{
		ID:         uuid.NewString(),
		UserId:     request.UserId,
		FullName:   request.FullName,
		UrlProfile: request.UrlProfile,
		Address:    request.Address,
		About:      request.About,
		Bio:        request.Bio,
		Tag:        request.Tag,
	}

	if err := c.profileRepo.Create(tx, profile); err != nil {
		c.log.Warnf("Failed create profile to database : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.log.Warnf("Failed commit transaction : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	return converter.ProfileToResponse(profile), nil
}

func (c *ProfileUseCase) Update(ctx context.Context, request *model.UpdateProfileRequest) (*model.ProfileResponse, error) {
	tx := c.db.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.validate.Struct(request); err != nil {
		c.log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	profile := new(entity.Profile)

	if err := c.profileRepo.FindByIdAndUserId(tx, profile, request.ID, request.UserId); err != nil {
		c.log.WithError(err).Error("error getting Profile")
		return nil, fiber.ErrNotFound
	}

	profile.FullName = request.FullName
	profile.UrlProfile = request.UrlProfile
	profile.Address = request.Address
	profile.About = request.About
	profile.Bio = request.Bio
	profile.Tag = request.Tag

	if err := c.profileRepo.Update(tx, profile); err != nil {
		c.log.WithError(err).Error("error updating Profile")
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.log.WithError(err).Error("error updating Profile")
		return nil, fiber.ErrInternalServerError
	}

	return converter.ProfileToResponse(profile), nil
}

// Middleware
func (c *ProfileUseCase) GetAll(ctx context.Context, request *model.GetProfileRequest) ([]model.ProfileResponse, error) {
	tx := c.db.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.validate.Struct(request); err != nil {
		c.log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	profiles := new([]entity.Profile)

	if err := c.profileRepo.FindAllByUserId(tx, profiles, request.UserId); err != nil {
		c.log.WithError(err).Error("error getting profile by user_id")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.log.WithError(err).Error("error getting profile")
		return nil, fiber.ErrInternalServerError
	}

	response := make([]model.ProfileResponse, len(*profiles))
	for i, profile := range *profiles {
		response[i] = *converter.ProfileToResponse(&profile)
	}

	return response, nil
}

func (c *ProfileUseCase) Get(ctx context.Context, request *model.GetByIdProfileRequest) (*model.ProfileResponse, error) {
	tx := c.db.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.validate.Struct(request); err != nil {
		c.log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	profile := new(entity.Profile)

	if err := c.profileRepo.FindByIdAndUserId(tx, profile, request.ID, request.UserId); err != nil {
		c.log.WithError(err).Error("error getting profile by id and user_id")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.log.WithError(err).Error("error getting profile")
		return nil, fiber.ErrInternalServerError
	}

	return converter.ProfileToResponse(profile), nil
}

func (c *ProfileUseCase) GetByUsername(ctx context.Context, request *model.GetPublicProfileRequest) (*model.PublicResponse, error) {
	tx := c.db.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.validate.Struct(request); err != nil {
		c.log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	profile := new(entity.Profile)
	achievements := new([]entity.Achievement)
	projects := new([]entity.Project)
	educations := new([]entity.Education)
	experiences := new([]entity.Experience)

	if err := c.profileRepo.FindByUsername(tx, profile, request.Username); err != nil {
		c.log.WithError(err).Error("error getting profil by username")
		return nil, fiber.ErrNotFound
	}

	if err := c.achivRepo.FindAllByUsername(tx, achievements, request.Username); err != nil {
		c.log.WithError(err).Error("error getting achievements by username")
		return nil, fiber.ErrNotFound
	}

	if err := c.projectRepo.FindAllByUsername(tx, projects, request.Username); err != nil {
		c.log.WithError(err).Error("error getting projects by username")
		return nil, fiber.ErrNotFound
	}

	if err := c.educatinRepo.FindAllByUsername(tx, educations, request.Username); err != nil {
		c.log.WithError(err).Error("error getting educations by username")
		return nil, fiber.ErrNotFound
	}

	if err := c.experienceRepo.FindAllByUsername(tx, experiences, request.Username); err != nil {
		c.log.WithError(err).Error("error getting experiences by username")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.log.WithError(err).Error("error getting profile")
		return nil, fiber.ErrInternalServerError
	}

	profileResponse := converter.ProfileToResponse(profile)
	profileResponse.Username = request.Username

	achivResponses := make([]model.AchievementResponse, len(*achievements))
	for i, achiev := range *achievements {
		achivResponses[i] = *converter.AchievementToResponse(&achiev)
	}

	projectResponses := make([]model.ProjectResponse, len(*projects))
	for i, project := range *projects {
		projectResponses[i] = *converter.ProjectToResponse(&project)
	}

	educationResponses := make([]model.EducationResponse, len(*educations))
	for i, education := range *educations {
		educationResponses[i] = *converter.EducationToResponse(&education)
	}

	experienceResponses := make([]model.ExperienceResponse, len(*experiences))
	for i, experience := range *experiences {
		experienceResponses[i] = *converter.ExperienceToResponse(&experience)
	}

	return &model.PublicResponse{
		Profile:      profileResponse,
		Achievements: achivResponses,
		Projects:     projectResponses,
		Education:    educationResponses,
		Experiences:  experienceResponses,
	}, nil
}
