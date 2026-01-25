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

func (c *ProjectUseCase) Update(ctx context.Context, request *model.UpdateProjectRequest) (*model.ProjectResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	project := new(entity.Project)
	if err := c.ProjectRepo.FindByIdAndUserId(tx, project, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error find project by id and user_id")
		return nil, fiber.ErrNotFound
	}

	project.Title = request.Title
	project.Description = request.Description
	project.ImageUrl = request.Image
	project.GithubUrl = request.GithubUrl
	project.LiveUrl = request.LiveUrl
	project.Challenge = request.Challenges
	project.Solution = request.Solution
	project.IsFeatured = request.IsFeatured

	project.Tags = request.Tags
	project.TechStack = request.TechStack
	project.Gallery = request.Gallery
	project.Features = request.Features

	if err := c.ProjectRepo.Update(tx, project); err != nil {
		c.Log.WithError(err).Error("failed updating project")
		return nil, fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error Update Project")
		return nil, fiber.ErrInternalServerError
	}

	return converter.ProjectToResponse(project), nil
}

func (c *ProjectUseCase) Delete(ctx context.Context, request *model.GetByIdProjectRequest) error {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return fiber.ErrBadRequest
	}

	project := new(entity.Project)
	if err := c.ProjectRepo.FindByIdAndUserId(tx, project, request.ID, request.UserId); err != nil {
		c.Log.WithError(err).Error("error find project by id and user_id")
		return fiber.ErrNotFound
	}

	if err := c.ProjectRepo.Delete(tx, project); err != nil {
		c.Log.WithError(err).Error("error deleting project")
		return fiber.ErrInternalServerError
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error deleting project")
		return fiber.ErrInternalServerError
	}

	return nil
}

// Middleware
func (c *ProjectUseCase) GetAll(ctx context.Context, request *model.GetProjectRequest) ([]model.ProjectResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	projects := new([]entity.Project)
	if err := c.ProjectRepo.FindAllByUserId(tx, projects, request.UserId); err != nil {
		c.Log.WithError(err).Error("error getting project")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting project")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.ProjectResponse, len(*projects))
	for i, project := range *projects {
		responses[i] = *converter.ProjectToResponse(&project)
	}

	return responses, nil
}

func (c *ProjectUseCase) GetAllByUsername(ctx context.Context, request *model.GetPublicProjectRequest) ([]model.ProjectResponse, error) {
	tx := c.DB.WithContext(ctx).Begin()
	defer tx.Rollback()

	if err := c.Validate.Struct(request); err != nil {
		c.Log.WithError(err).Error("error validating request body")
		return nil, fiber.ErrBadRequest
	}

	projects := new([]entity.Project)
	if err := c.ProjectRepo.FindAllByUsername(tx, projects, request.Username); err != nil {
		c.Log.WithError(err).Error("error getting project")
		return nil, fiber.ErrNotFound
	}

	if err := tx.Commit().Error; err != nil {
		c.Log.WithError(err).Error("error getting project")
		return nil, fiber.ErrInternalServerError
	}

	responses := make([]model.ProjectResponse, len(*projects))
	for i, project := range *projects {
		responses[i] = *converter.ProjectToResponse(&project)
	}

	return responses, nil
}
