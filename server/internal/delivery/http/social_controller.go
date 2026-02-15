package http

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/usecase"
)

type SocialController struct {
	Log     *logrus.Logger
	UseCase *usecase.SocialUseCase
}

func NewSocialController(log *logrus.Logger, useCase *usecase.SocialUseCase) *SocialController {
	return &SocialController{
		Log:     log,
		UseCase: useCase,
	}
}

func (c *SocialController) Create(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.CreateSocialRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID
	response, err := c.UseCase.Create(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed creating Social")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.SocialResponse]{Data: response})
}

func (c *SocialController) Update(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.UpdateSocialRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	request.UserId = auth.ID
	request.ID = ctx.Params("skillId")

	response, err := c.UseCase.Update(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed Creating Social")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.SocialResponse]{Data: response})
}

func (c *SocialController) Delete(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	skillId := ctx.Params("skillId")

	request := &model.DeleteSocialRequest{
		ID:     skillId,
		UserId: auth.ID,
	}

	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	if err := c.UseCase.Delete(ctx.UserContext(), request); err != nil {
		c.Log.WithError(err).Error("error deleting social")
		return err
	}

	return ctx.JSON(model.WebResponse[bool]{Data: true})
}

func (c *SocialController) GetAll(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetSocialRequest{
		UserId: auth.ID,
	}

	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	response, err := c.UseCase.GetAll(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed GetAll Social by UserId")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.SocialResponse]{Data: response})
}

func (c *SocialController) GetAllByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicSocialRequest{
		Username: username,
	}

	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	response, err := c.UseCase.GetAllByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed GetAll Social By Username")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.SocialResponse]{Data: response})
}

func (c *SocialController) Get(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	skillId := ctx.Params("skillId")

	request := &model.GetByIdSocialRequest{
		ID:     skillId,
		UserId: auth.ID,
	}

	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	response, err := c.UseCase.Get(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed Get Social by userId")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.SocialResponse]{Data: response})
}
