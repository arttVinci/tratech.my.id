package http

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/usecase"
)

type ProjectController struct {
	UseCase *usecase.ProjectUseCase
	Log     *logrus.Logger
}

func NewProjectController(usecase *usecase.ProjectUseCase, log *logrus.Logger) *ProjectController {
	return &ProjectController{
		UseCase: usecase,
		Log:     log,
	}
}

func (c *ProjectController) Create(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.CreateProjectRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}
	request.UserId = auth.ID

	response, err := c.UseCase.Create(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error creating Project")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProjectResponse]{Data: response})
}

func (c *ProjectController) Update(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.UpdateProjectRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	request.UserId = auth.ID
	request.ID = ctx.Params("projectId")

	response, err := c.UseCase.Update(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error updating Project")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProjectResponse]{Data: response})
}

func (c *ProjectController) Delete(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.DeleteProjectRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	request.ID = ctx.Params("projectId")
	request.UserId = auth.ID

	if err := c.UseCase.Delete(ctx.UserContext(), request); err != nil {
		c.Log.WithError(err).Error("error deleting Project")
		return err
	}

	return ctx.JSON(model.WebResponse[bool]{Data: true})
}

// GetAll User Endpoint
func (c *ProjectController) GetAll(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetProjectRequest{
		UserId: auth.ID,
	}

	response, err := c.UseCase.GetAll(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get Projects")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.ProjectResponse]{
		Data: response,
	})
}

// GetAll Public Endpoint
func (c *ProjectController) GetAllByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicProjectRequest{
		Username: username,
	}

	response, err := c.UseCase.GetAllByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get Projects")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.ProjectResponse]{
		Data: response,
	})
}

// Get by id user Endpoint
func (c *ProjectController) Get(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	id := ctx.Params("projectId")

	request := &model.GetByIdProjectRequest{
		ID:     id,
		UserId: auth.ID,
	}

	response, err := c.UseCase.Get(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get project")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProjectResponse]{Data: response})
}

// Get Public Endpoint
func (c *ProjectController) GetByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")
	id := ctx.Params("projectId")

	request := &model.GetPublicProjectByIdRequest{
		ID:       id,
		Username: username,
	}

	response, err := c.UseCase.GetByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get project")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProjectResponse]{Data: response})
}
