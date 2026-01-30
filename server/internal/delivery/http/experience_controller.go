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
