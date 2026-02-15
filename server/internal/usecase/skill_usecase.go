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

	return converter.SkillToResponse(skill), nil
}

func (c *SkillUseCase) Update(ctx context.Context, request *model.UpdateSkillRequest) (*model.SkillResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	skill := new(entity.Skill)
	if err := c.SkillRepo.FindByIdAndUserId(tx, skill, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting Skill by user id")
		return nil, fiber.ErrNotFound
	}

	skill.Title = request.Title
	skill.IconUrl = request.IconUrl
	skill.Level = request.Level

	if err := c.SkillRepo.Update(tx, skill); err != nil {
		c.Log.WithError(err).Error("error updating Skill")
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error updating Skill")
		return nil, fiber.ErrInternalServerError
	}

	return converter.SkillToResponse(skill), nil
}

func (c *SkillUseCase) Delete(ctx context.Context, request *model.DeleteSkillRequest) error {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return fiber.ErrBadRequest
	}

	skill := new(entity.Skill)
	if err := c.SkillRepo.FindByIdAndUserId(tx, skill, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error find skill by id and user_id")
		return fiber.ErrNotFound
	}

	if err := c.SkillRepo.Delete(tx, skill); err != nil {
		c.Log.WithError(err).Error("error deleting skill")
		return fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error deleting skill")
		return fiber.ErrInternalServerError
	}

	return nil
}

func (c *SkillUseCase) GetAll(ctx context.Context, request *model.GetSkillRequest) ([]model.SkillResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	skills := new([]entity.Skill)
	if err := c.SkillRepo.FindAllByUserId(tx, skills, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting skills")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting skills")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.SkillResponse, len(*skills))
	for i, skill := range *skills {
		responses[i] = *converter.SkillToResponse(&skill)
	}

	return responses, nil
}

func (c *SkillUseCase) GetAllByUsername(ctx context.Context, request *model.GetPublicSkillRequest) ([]model.SkillResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	skills := new([]entity.Skill)
	if err := c.SkillRepo.FindAllByUsername(tx, skills, request.Username); err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.SkillResponse, len(*skills))
	for i, skill := range *skills {
		responses[i] = *converter.SkillToResponse(&skill)
	}

	return responses, nil
}

func (c *SkillUseCase) Get(ctx context.Context, request *model.GetByIdSkillRequest) (*model.SkillResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	skill := new(entity.Skill)
	if err := c.SkillRepo.FindByIdAndUserId(tx, skill, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting achievement")
		return nil, fiber.ErrInternalServerError
	}

	return converter.SkillToResponse(skill), nil
}
