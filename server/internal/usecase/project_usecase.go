package usecase

import (
	"github.com/go-playground/validator/v10"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
	"tratech.my.id/server/internal/repository"
)

type ProjectUseCase struct {
	DB          *gorm.DB
	Log         *logrus.Logger
	Validate    *validator.Validate
	ProjectRepo *repository.ProjectRepository
}

func NewProjectUsecase(db *gorm.DB, log *logrus.Logger, validate *validator.Validate, repo *repository.ProjectRepository) *ProjectUseCase {
	return &ProjectUseCase{
		DB:          db,
		Log:         log,
		Validate:    validate,
		ProjectRepo: repo,
	}
}
