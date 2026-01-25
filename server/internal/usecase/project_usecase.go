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

type ProjectUseCase struct {
	DB          *gorm.DB
	Log         *logrus.Logger
	Validate    *validator.Validate
	ProjectRepo *repository.ProjectRepository
}

func NewProjectUsecase(db *gorm.DB, log *logrus.Logger, validate *validator.Validate, repo *repository.ProjectRepository) *ProjectUseCase {
	return &ProjectUseCase{
		DB:          db,
		Log:         log,
		Validate:    validate,
		ProjectRepo: repo,
	}
}

func (c *ProjectUseCase) Create(ctx context.Context, request *model.CreateProjectRequest) (*model.ProjectResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	project := &entity.Project{
		ID:          uuid.NewString(),
		UserId:      request.UserId,
		Title:       request.Title,
		ImageUrl:    request.Image,
		Description: request.Description,
		GithubUrl:   request.GithubUrl,
		LiveUrl:     request.LiveUrl,
		Challenge:   request.Challenges,
		Solution:    request.Solution,
		IsFeatured:  request.IsFeatured,

		Tags:      request.Tags,
		TechStack: request.TechStack,
		Gallery:   request.Gallery,
		Features:  request.Features,
	}

	if err := c.ProjectRepo.Create(tx, project); err != nil {
		c.Log.WithError(err).Error("failed create Project to database")
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error creating Project")
		return nil, fiber.ErrInternalServerError
	}

	return converter.ProjectToResponse(project), nil
}
