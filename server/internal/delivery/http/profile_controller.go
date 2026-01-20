package http

import (
	"github.com/sirupsen/logrus"
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
