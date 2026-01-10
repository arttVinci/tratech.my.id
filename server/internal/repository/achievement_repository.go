package repository

import (
	"gorm.io/gorm"
	"tratech.my.id/server/internal/entity"
)

type AchievementRepository struct {
	Repository[entity.Achievement]
}

func NewAchievementRepository() *AchievementRepository {
	return &AchievementRepository{}
}

func (r *AchievementRepository) FindAllByUserId(db *gorm.DB, achievement *entity.Achievement, userId string) error {
	return db.Where("user_id = ?", userId).Find(achievement).Error
}

func (r *AchievementRepository) FindByIdAndUserId(db *gorm.DB, achievement *entity.Achievement, id string, userId string) error {
	return db.Where("id = ? AND user_id = ?", id, userId).Take(achievement).Error
}
