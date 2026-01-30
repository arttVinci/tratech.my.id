package usecase

import (
	"context"
	"time"

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

type ExperienceUseCase struct {
	DB             *gorm.DB
	Log            *logrus.Logger
	Validate       *validator.Validate
	ExperienceRepo *repository.ExperienceRepository
}

func NewExperienceUseCase(
	db *gorm.DB,
	log *logrus.Logger,
	validate *validator.Validate,
	experienceRepo *repository.ExperienceRepository,
) *ExperienceUseCase {
	return &ExperienceUseCase{
		DB:             db,
		Log:            log,
		Validate:       validate,
		ExperienceRepo: experienceRepo,
	}
}

func (c *ExperienceUseCase) Create(ctx context.Context, request *model.CreateExperienceRequest) (*model.ExperienceResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	experience := &entity.Experience{
		ID:             uuid.NewString(),
		UserId:         request.UserId,
		Position:       request.Position,
		Company:        request.Company,
		CompanyUrl:     request.CompanyUrl,
		LogoUrl:        request.LogoUrl,
		Location:       request.Location,
		EmploymentType: request.EmploymentType,
		LocationType:   request.LocationType,
		StartDate:      request.StartDate,
		EndDate:        request.EndDate,
		IsCurrent:      request.IsCurrent,
		Description:    request.Description,
	}

	if err := c.ExperienceRepo.Create(tx, experience); err != nil {
		c.Log.Warnf("Failed create Experience to database : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.Warnf("Failed commit transaction : %+v", err)
		return nil, fiber.ErrInternalServerError
	}

	return converter.ExperienceToResponse(experience), nil
}

func (c *ExperienceUseCase) Update(ctx context.Context, request *model.UpdateExperienceRequest) (*model.ExperienceResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	experience := new(entity.Experience)
	if err := c.ExperienceRepo.FindByIdAndUserId(tx, experience, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting Experience")
		return nil, fiber.ErrNotFound
	}

	experience.Position = request.Position
	experience.Company = request.Company
	experience.CompanyUrl = request.CompanyUrl
	experience.LogoUrl = request.LogoUrl
	experience.Location = request.Location
	experience.EmploymentType = request.EmploymentType
	experience.LocationType = request.LocationType
	experience.StartDate = request.StartDate
	experience.EndDate = request.EndDate
	experience.IsCurrent = request.IsCurrent
	experience.Description = request.Description
	experience.UpdatedAt = time.Now().UnixMilli()

	if err := c.ExperienceRepo.Update(tx, experience); err != nil {
		c.Log.WithError(err).Error("error updating Experience")
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error updating experience")
		return nil, fiber.ErrInternalServerError
	}

	return converter.ExperienceToResponse(experience), nil
}

func (c *ExperienceUseCase) Delete(ctx context.Context, request *model.DeleteExperienceRequest) error {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return fiber.ErrBadRequest
	}

	experience := new(entity.Experience)
	if err := c.ExperienceRepo.FindByIdAndUserId(tx, experience, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error find experience by id and user_id")
		return fiber.ErrNotFound
	}

	if err := c.ExperienceRepo.Delete(tx, experience); err != nil {
		c.Log.WithError(err).Error("error deleting experience")
		return fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error deleting experience")
		return fiber.ErrInternalServerError
	}

	return nil
}

func (c *ExperienceUseCase) GetAll(ctx context.Context, request *model.GetExperienceRequest) ([]model.ExperienceResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	experiences := new([]entity.Experience)
	if err := c.ExperienceRepo.FindAllByUserId(tx, experiences, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting experiences")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting experiences")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.ExperienceResponse, len(*experiences))
	for i, experience := range *experiences {
		responses[i] = *converter.ExperienceToResponse(&experience)
	}

	return responses, nil
}

func (c *ExperienceUseCase) GetAllByUsername(ctx context.Context, request *model.GetPublicExperienceRequest) ([]model.ExperienceResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	experiences := new([]entity.Experience)
	if err := c.ExperienceRepo.FindAllByUsername(tx, experiences, request.Username); err != nil {
		c.Log.WithError(err).Error("error getting experiences")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting experiences")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.ExperienceResponse, len(*experiences))
	for i, experience := range *experiences {
		responses[i] = *converter.ExperienceToResponse(&experience)
	}

	return responses, nil
}

func (c *ExperienceUseCase) Get(ctx context.Context, request *model.GetByIdExperienceRequest) (*model.ExperienceResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	experience := new(entity.Experience)
	if err := c.ExperienceRepo.FindByIdAndUserId(tx, experience, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting experience")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting experience")
		return nil, fiber.ErrInternalServerError
	}

	return converter.ExperienceToResponse(experience), nil
}

func (c *ExperienceUseCase) GetByUsername(ctx context.Context, request *model.GetPublicExperienceByIdRequest) (*model.ExperienceResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	experience := new(entity.Experience)
	if err := c.ExperienceRepo.FindByUsername(tx, experience, request.Username, request.ID); err != nil {
		c.Log.WithError(err).Error("error getting experience")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting experience")
		return nil, fiber.ErrInternalServerError
	}

	return converter.ExperienceToResponse(experience), nil
}
