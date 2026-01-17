package repository

import (
	"gorm.io/gorm"
	"tratech.my.id/server/internal/entity"
)

type ProfileRepository struct {
	Repository[entity.Profile]
}

func NewProfileRepository() *ProfileRepository {
	return &ProfileRepository{}
}

func (r *ProfileRepository) FindByIdAndUserId(db *gorm.DB, profile *entity.Profile, id string, userId string) error {
	return db.Where("id = ? AND user_id = ?", id, userId).Take(profile).Error
}
