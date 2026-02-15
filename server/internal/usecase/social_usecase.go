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

type SocialUseCase struct {
	DB         *gorm.DB
	Log        *logrus.Logger
	Validate   *validator.Validate
	SocialRepo *repository.SocialRepository
}

func NewSocialUsecase(
	db *gorm.DB,
	log *logrus.Logger,
	validate *validator.Validate,
	SocialRepo *repository.SocialRepository,
) *SocialUseCase {
	return &SocialUseCase{
		DB:         db,
		Log:        log,
		Validate:   validate,
		SocialRepo: SocialRepo,
	}
}

func (c *SocialUseCase) Create(ctx context.Context, request *model.CreateSocialRequest) (*model.SocialResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	social := &entity.Social{
		ID:          uuid.NewString(),
		UserId:      request.UserId,
		Title:       request.Title,
		Platform:    request.Platform,
		PlatformUrl: request.PlatformUrl,
	}

	if err := c.SocialRepo.Create(tx, social); err != nil {
		c.Log.Warnf("Failed create Social to database : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.Warnf("Failed commit transaction : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	return converter.SocialToResponse(social), nil
}

func (c *SocialUseCase) Update(ctx context.Context, request *model.UpdateSocialRequest) (*model.SocialResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	social := new(entity.Social)
	if err := c.SocialRepo.FindByIdAndUserId(tx, social, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting Social by user id")
		return nil, fiber.ErrNotFound
	}

	social.Title = request.Title
	social.Platform = request.Platform
	social.PlatformUrl = request.PlatformUrl

	if err := c.SocialRepo.Update(tx, social); err != nil {
		c.Log.WithError(err).Error("error updating Social")
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error updating Social")
		return nil, fiber.ErrInternalServerError
	}

	return converter.SocialToResponse(social), nil
}

func (c *SocialUseCase) Delete(ctx context.Context, request *model.DeleteSocialRequest) error {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return fiber.ErrBadRequest
	}

	social := new(entity.Social)
	if err := c.SocialRepo.FindByIdAndUserId(tx, social, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error find social by id and user_id")
		return fiber.ErrNotFound
	}

	if err := c.SocialRepo.Delete(tx, social); err != nil {
		c.Log.WithError(err).Error("error deleting social")
		return fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error deleting social")
		return fiber.ErrInternalServerError
	}

	return nil
}

func (c *SocialUseCase) GetAll(ctx context.Context, request *model.GetSocialRequest) ([]model.SocialResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	socials := new([]entity.Social)
	if err := c.SocialRepo.FindAllByUserId(tx, socials, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting socials")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting skills")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.SocialResponse, len(*socials))
	for i, social := range *socials {
		responses[i] = *converter.SocialToResponse(&social)
	}

	return responses, nil
}

func (c *SocialUseCase) GetAllByUsername(ctx context.Context, request *model.GetPublicSocialRequest) ([]model.SocialResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	socials := new([]entity.Social)
	if err := c.SocialRepo.FindAllByUsername(tx, socials, request.Username); err != nil {
		c.Log.WithError(err).Error("error getting socials")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting socials")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.SocialResponse, len(*socials))
	for i, social := range *socials {
		responses[i] = *converter.SocialToResponse(&social)
	}

	return responses, nil
}

func (c *SocialUseCase) Get(ctx context.Context, request *model.GetByIdSocialRequest) (*model.SocialResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	social := new(entity.Social)
	if err := c.SocialRepo.FindByIdAndUserId(tx, social, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting social")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting social")
		return nil, fiber.ErrInternalServerError
	}

	return converter.SocialToResponse(social), nil
}
