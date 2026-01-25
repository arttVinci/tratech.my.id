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
	db          *gorm.DB
	log         *logrus.Logger
	validate    *validator.Validate
	profileRepo *repository.ProfileRepository
}

func NewProfileUseCase(
	db *gorm.DB,
	log *logrus.Logger,
	validate *validator.Validate,
	profileRepo *repository.ProfileRepository,
) *ProfileUseCase {
	return &ProfileUseCase{
		db:          db,
		log:         log,
		validate:    validate,
		profileRepo: profileRepo,
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

// Public
func (c *ProfileUseCase) GetAllByUsername(ctx context.Context, request *model.GetPublicProfileRequest) ([]model.ProfileResponse, error) {
	tx := c.db.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.validate.Struct(request); err != nil {
		c.log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	profiles := new([]entity.Profile)

	if err := c.profileRepo.FindAllByUsername(tx, profiles, request.Username); err != nil {
		c.log.WithError(err).Error("error getting profile by username")
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

func (c *ProfileUseCase) GetByUsername(ctx context.Context, request *model.GetPublicProfileRequest) (*model.ProfileResponse, error) {
	tx := c.db.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.validate.Struct(request); err != nil {
		c.log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	profile := new(entity.Profile)

	if err := c.profileRepo.FindByUsername(tx, profile, request.Username); err != nil {
		c.log.WithError(err).Error("error getting profile by id and username")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.log.WithError(err).Error("error getting profile")
		return nil, fiber.ErrInternalServerError
	}

	return converter.ProfileToResponse(profile), nil
}
