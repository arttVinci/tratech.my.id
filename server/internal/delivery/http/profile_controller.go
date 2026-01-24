package http

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/usecase"
)

type ProfileController struct {
	UseCase *usecase.ProfileUseCase
	Log     *logrus.Logger
}

func NewProfileController(useCase *usecase.ProfileUseCase, log *logrus.Logger) *ProfileController {
	return &ProfileController{
		UseCase: useCase,
		Log:     log,
	}
}

func (c *ProfileController) Create(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.CreateProfileRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing body request")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID

	response, err := c.UseCase.Create(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Error creating profile")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProfileResponse]{Data: response})
}

func (c *ProfileController) Update(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.UpdateProfileRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID
	request.ID = ctx.Params("profileId")

	response, err := c.UseCase.Update(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error update Profile")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProfileResponse]{Data: response})
}

// GetAll With Middleware ( Auth )
func (c *ProfileController) GetAll(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetProfileRequest{
		UserId: auth.ID,
	}

	response, err := c.UseCase.GetAll(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get Profiles")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.ProfileResponse]{
		Data: response,
	})
}

// GetAll Public
func (c *ProfileController) GetAllByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicProfileRequest{
		Username: username,
	}

	response, err := c.UseCase.GetAllByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get profiles")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.ProfileResponse]{
		Data: response,
	})
}

// Get With Middleware ( Auth )
func (c *ProfileController) Get(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	id := ctx.Params("profileId")

	request := &model.GetByIdProfileRequest{
		ID:     id,
		UserId: auth.ID,
	}

	response, err := c.UseCase.Get(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get Profile")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProfileResponse]{Data: response})
}

// Get Public
func (c *ProfileController) GetByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicProfileByIdRequest{
		Username: username,
	}

	response, err := c.UseCase.GetByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get Profile")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProfileResponse]{Data: response})
}
