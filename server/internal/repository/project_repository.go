package repository

import (
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
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

func (r *ProjectRepository) FindByIdAndIdUser(db *gorm.DB, project entity.Project, id string, userId string) error {
	return db.Where("id = ? AND user_id = ?", id, userId).Take(project).Error
}
