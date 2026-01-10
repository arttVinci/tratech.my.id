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

func NewContactController(useCase *usecase.AchievementUseCase, log *logrus.Logger) *AchievementController {
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
