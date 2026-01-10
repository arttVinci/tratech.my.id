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
	return &AchievementUseCase{DB: DB, Log: log, Validate: validate, AchievRepo: achievRepo}
}

func (c AchievementUseCase) Create(ctx context.Context, request model.CreateAchievementRequest) (*model.AchievementResponse, error) {
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
