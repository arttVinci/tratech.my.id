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

type AchievementUseCase struct {
	DB         *gorm.DB
	Log        *logrus.Logger
	Validate   *validator.Validate
	AchievRepo *repository.AchievementRepository
}

func NewAchievementUseCase(
	DB *gorm.DB,
	log *logrus.Logger,
	validate *validator.Validate,
	achievRepo *repository.AchievementRepository,
) *AchievementUseCase {
	return &AchievementUseCase{
		DB:         DB,
		Log:        log,
		Validate:   validate,
		AchievRepo: achievRepo,
	}
}

func (c AchievementUseCase) Create(ctx context.Context, request *model.CreateAchievementRequest) (*model.AchievementResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	err := c.Validate.Struct(request)
	if err != nil {
		c.Log.Warnf("Invalid request body : %+v", err)
		return nil, fiber.ErrBadRequest
	}

	achievement := &entity.Achievement{
		ID:            uuid.NewString(),
		UserId:        request.UserId,
		Title:         request.Title,
		ImageUrl:      request.ImageUrl,
		Organization:  request.Organization,
		IssuedDate:    request.IssuedDate,
		CredentialId:  *request.CredentialId,
		CredentialUrl: *request.CredentialUrl,
	}

	if err := c.AchievRepo.Create(tx, achievement); err != nil {
		c.Log.Warnf("Failed create Achievement to database : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.Warnf("Failed commit transaction : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	return converter.AchievementToResponse(achievement), nil
}

func (c AchievementUseCase) Update(ctx context.Context, request *model.UpdateAchievementRequest) (*model.AchievementResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	achievement := new(entity.Achievement)
	if err := c.AchievRepo.FindByIdAndUserId(tx, achievement, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting Achievement")
		return nil, fiber.ErrNotFound
	}

	achievement.Title = request.Title
	achievement.ImageUrl = request.ImageUrl
	achievement.Organization = request.Organization
	achievement.IssuedDate = request.IssuedDate
	achievement.CredentialUrl = *request.CredentialUrl
	achievement.CredentialId = *request.CredentialId

	if err := c.AchievRepo.Update(tx, achievement); err != nil {
		c.Log.WithError(err).Error("error updating achievement")
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error updating achievement")
		return nil, fiber.ErrInternalServerError
	}

	return converter.AchievementToResponse(achievement), nil
}

func (c AchievementUseCase) GetAll(ctx context.Context, request *model.GetAchievementRequest) ([]model.AchievementResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	achievements := new([]entity.Achievement)
	if err := c.AchievRepo.FindAllByUserId(tx, achievements, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.AchievementResponse, len(*achievements))
	for i, achiev := range *achievements {
		responses[i] = *converter.AchievementToResponse(&achiev)
	}

	return responses, nil
}

func (c AchievementUseCase) GetAllByUsername(ctx context.Context, request *model.GetPublicAchievementRequest) ([]model.AchievementResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	achievements := new([]entity.Achievement)
	if err := c.AchievRepo.FindAllByUsername(tx, achievements, request.Username); err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.AchievementResponse, len(*achievements))
	for i, achiev := range *achievements {
		responses[i] = *converter.AchievementToResponse(&achiev)
	}

	return responses, nil
}

func (c *AchievementUseCase) Get(ctx context.Context, request *model.GetByIdAchievementRequest) (*model.AchievementResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	achievement := new(entity.Achievement)
	if err := c.AchievRepo.FindByIdAndUserId(tx, achievement, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrInternalServerError
	}

	return converter.AchievementToResponse(achievement), nil
}
