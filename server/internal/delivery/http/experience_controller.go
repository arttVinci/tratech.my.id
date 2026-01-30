package http

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/usecase"
)

type ExperienceController struct {
	UseCase *usecase.ExperienceUseCase
	Log     *logrus.Logger
}

func NewExperienceController(useCase *usecase.ExperienceUseCase, log *logrus.Logger) *ExperienceController {
	return &ExperienceController{
		UseCase: useCase,
		Log:     log,
	}
}

func (c *ExperienceController) Create(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.CreateExperienceRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}
	request.UserId = auth.ID

	response, err := c.UseCase.Create(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error creating experience")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ExperienceResponse]{Data: response})
}

func (c *ExperienceController) Update(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.UpdateExperienceRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID
	request.ID = ctx.Params("experienceId")

	response, err := c.UseCase.Update(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error update experience")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ExperienceResponse]{Data: response})
}

func (c *ExperienceController) Delete(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	experienceId := ctx.Params("experienceId")

	request := &model.DeleteExperienceRequest{
		ID:     experienceId,
		UserId: auth.ID,
	}

	if err := c.UseCase.Delete(ctx.UserContext(), request); err != nil {
		c.Log.WithError(err).Error("error deleting experience")
		return err
	}

	return ctx.JSON(model.WebResponse[bool]{Data: true})
}

// GetAll User Endpoint
func (c *ExperienceController) GetAll(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetExperienceRequest{
		UserId: auth.ID,
	}

	response, err := c.UseCase.GetAll(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get experiences")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.ExperienceResponse]{
		Data: response,
	})
}

// GetAll Public Endpoint
func (c *ExperienceController) GetAllByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicExperienceRequest{
		Username: username,
	}

	response, err := c.UseCase.GetAllByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get experiences")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.ExperienceResponse]{
		Data: response,
	})
}

// Get by id user Endpoint
func (c *ExperienceController) Get(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	id := ctx.Params("experienceId")

	request := &model.GetByIdExperienceRequest{
		ID:     id,
		UserId: auth.ID,
	}

	response, err := c.UseCase.Get(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get experience")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ExperienceResponse]{Data: response})
}

// Get Public Endpoint
func (c *ExperienceController) GetByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")
	id := ctx.Params("experienceId")

	request := &model.GetPublicExperienceByIdRequest{
		ID:       id,
		Username: username,
	}

	response, err := c.UseCase.GetByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get experience")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ExperienceResponse]{Data: response})
}
