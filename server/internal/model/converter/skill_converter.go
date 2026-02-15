package converter

import (
	"tratech.my.id/server/internal/entity"
	"tratech.my.id/server/internal/model"
)

func SkillToResponse(skill *entity.Skill) *model.SkillResponse {
	return &model.SkillResponse{
		ID:      skill.ID,
		Title:   skill.Title,
		IconUrl: skill.IconUrl,
		Level:   skill.Level,
	}
}
