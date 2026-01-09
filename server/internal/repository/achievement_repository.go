package repository

import (
	"tratech.my.id/server/internal/entity"
)

type AchievementRepository struct {
	Repository[entity.Achievement]
}

func NewAchievementRepository() *AchievementRepository {
	return &AchievementRepository{}
}
