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
