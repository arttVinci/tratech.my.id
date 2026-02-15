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

type SkillUseCase struct {
	DB        *gorm.DB
	Log       *logrus.Logger
	Validate  *validator.Validate
	SkillRepo *repository.SkillRepository
}

func NewSkillUsecase(
	db *gorm.DB,
	log *logrus.Logger,
	validate *validator.Validate,
	skillRepo *repository.SkillRepository,
) *SkillUseCase {
	return &SkillUseCase{
		DB:        db,
		Log:       log,
		Validate:  validate,
		SkillRepo: skillRepo,
	}
}

func (c *SkillUseCase) Create(ctx context.Context, request *model.CreateSkillRequest) (*model.SkillResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	skill := &entity.Skill{
		ID:      uuid.NewString(),
		UserId:  request.UserId,
		Title:   request.Title,
		IconUrl: request.IconUrl,
		Level:   request.Level,
	}

	if err := c.SkillRepo.Create(tx, skill); err != nil {
		c.Log.Warnf("Failed create Skill to database : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.Warnf("Failed commit transaction : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	return converter.AchievementToResponse(achievement), nil
}
