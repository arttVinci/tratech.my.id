package repository

import (
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/entity"
)

type ProjectRepository struct {
	Repository[entity.Project]
	Log *logrus.Logger
}

func NewProjectRepository(log *logrus.Logger) *ProjectRepository {
	return &ProjectRepository{
		Log: log,
	}
}
