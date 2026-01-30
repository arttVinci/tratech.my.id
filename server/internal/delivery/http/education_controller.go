package http

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/usecase"
)

type EducationController struct {
	UseCase *usecase.EducationUseCase
	Log     *logrus.Logger
}

func NewEducationController(useCase *usecase.EducationUseCase, log *logrus.Logger) *EducationController {
	return &EducationController{
		UseCase: useCase,
		Log:     log,
	}
}

func (c *EducationController) Create(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.CreateEducationRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}
	request.UserId = auth.ID

	response, err := c.UseCase.Create(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error creating education")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.EducationResponse]{Data: response})
}

func (c *EducationController) Update(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.UpdateEducationRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID
	request.ID = ctx.Params("educationId")

	response, err := c.UseCase.Update(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error update education")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.EducationResponse]{Data: response})
}

func (c *EducationController) Delete(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	experienceId := ctx.Params("educationId")

	request := &model.DeleteEducationRequest{
		ID:     experienceId,
		UserId: auth.ID,
	}

	if err := c.UseCase.Delete(ctx.UserContext(), request); err != nil {
		c.Log.WithError(err).Error("error deleting education")
		return err
	}

	return ctx.JSON(model.WebResponse[bool]{Data: true})
}

// GetAll User Endpoint
func (c *EducationController) GetAll(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetEducationRequest{
		UserId: auth.ID,
	}

	response, err := c.UseCase.GetAll(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get educations")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.EducationResponse]{
		Data: response,
	})
}

// GetAll Public Endpoint
func (c *EducationController) GetAllByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicEducationRequest{
		Username: username,
	}

	response, err := c.UseCase.GetAllByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get educations")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.EducationResponse]{
		Data: response,
	})
}

// Get by id user Endpoint
func (c *EducationController) Get(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	id := ctx.Params("educationId")

	request := &model.GetByIdEducationRequest{
		ID:     id,
		UserId: auth.ID,
	}

	response, err := c.UseCase.Get(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get education")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.EducationResponse]{Data: response})
}

// Get Public Endpoint
func (c *EducationController) GetByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")
	id := ctx.Params("educationId")

	request := &model.GetPublicEducationByIdRequest{
		ID:       id,
		Username: username,
	}

	response, err := c.UseCase.GetByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get education")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.EducationResponse]{Data: response})
}
