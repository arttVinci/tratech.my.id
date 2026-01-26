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
