package http

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/usecase"
)

type AchievementController struct {
	UseCase *usecase.AchievementUseCase
	Log     *logrus.Logger
}

func NewAchievementController(useCase *usecase.AchievementUseCase, log *logrus.Logger) *AchievementController {
	return &AchievementController{
		UseCase: useCase,
		Log:     log,
	}
}

func (c *AchievementController) Create(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.CreateAchievementRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}
	request.UserId = auth.ID

	response, err := c.UseCase.Create(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error creating achievement")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.AchievementResponse]{Data: response})
}

func (c *AchievementController) Update(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.UpdateAchievementRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID
	request.ID = ctx.Params("achievementId")

	response, err := c.UseCase.Update(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error update achievement")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.AchievementResponse]{Data: response})
}

func (c *AchievementController) Delete(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.GetByIdAchievementRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing reuqest body")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID
	request.ID = ctx.Params("achievementId")

	if err := c.UseCase.Delete(ctx.UserContext(), request); err != nil {
		c.Log.WithError(err).Error("error deleting contact")
		return err
	}
	
	return ctx.JSON(model.WebResponse[bool]{Data: true})
}

// GetAll With Middleware ( Auth )
func (c *AchievementController) GetAll(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetAchievementRequest{
		UserId: auth.ID,
	}

	response, err := c.UseCase.GetAll(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get achievements")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.AchievementResponse]{
		Data: response,
	})
}

// GetAll Public
func (c *AchievementController) GetAllByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicAchievementRequest{
		Username: username,
	}

	response, err := c.UseCase.GetAllByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get achievements")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.AchievementResponse]{
		Data: response,
	})
}

// Get With Middleware ( Auth )
func (c *AchievementController) Get(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	id := ctx.Params("achievementId")

	request := &model.GetByIdAchievementRequest{
		ID:     id,
		UserId: auth.ID,
	}

	response, err := c.UseCase.Get(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get achievement")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.AchievementResponse]{Data: response})
}

// Get Public
func (c *AchievementController) GetByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")
	id := ctx.Params("achievementId")

	request := &model.GetPublicAchievementByIdRequest{
		ID:       id,
		Username: username,
	}

	response, err := c.UseCase.GetByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get achievement")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.AchievementResponse]{Data: response})
}
