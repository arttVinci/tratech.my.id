package http

import (
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/usecase"
)

type SkillController struct {
	UseCase *usecase.SkillUseCase
	Log     *logrus.Logger
}

func NewSkillController(useCase *usecase.SkillUseCase, log *logrus.Logger) *SkillController {
	return &SkillController{
		UseCase: useCase,
		Log:     log,
	}
}

func (c *SkillController) Create(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.CreateSkillRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID
	response, err := c.UseCase.Create(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed creating Skill")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.SkillResponse]{Data: response})
}

func (c *SkillController) Update(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.UpdateSkillRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	request.UserId = auth.ID
	request.ID = ctx.Params("skillId")

	response, err := c.UseCase.Update(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed Creating Skill")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.SkillResponse]{Data: response})
}

func (c *SkillController) Delete(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	skillId := ctx.Params("skillId")

	request := &model.DeleteSkillRequest{
		ID:     skillId,
		UserId: auth.ID,
	}

	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	if err := c.UseCase.Delete(ctx.UserContext(), request); err != nil {
		c.Log.WithError(err).Error("error deleting achievement")
		return err
	}

	return ctx.JSON(model.WebResponse[bool]{Data: true})
}

func (c *SkillController) GetAll(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetSkillRequest{
		UserId: auth.ID,
	}

	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	response, err := c.UseCase.GetAll(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed GetAll Skill by UserId")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.SkillResponse]{Data: response})
}

func (c *SkillController) GetAllByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicSkillRequest{
		Username: username,
	}

	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	response, err := c.UseCase.GetAllByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed GetAll By Username")
		return err
	}

	return ctx.JSON(model.WebResponse[[]model.SkillResponse]{Data: response})
}

func (c *SkillController) Get(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)
	skillId := ctx.Params("skillId")

	request := &model.GetByIdSkillRequest{
		ID:     skillId,
		UserId: auth.ID,
	}

	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return err
	}

	response, err := c.UseCase.Get(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Failed Get Skill by userId")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.SkillResponse]{Data: response})
}
