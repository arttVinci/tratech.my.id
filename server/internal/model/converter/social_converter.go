package converter

import (
	"tratech.my.id/server/internal/entity"
	"tratech.my.id/server/internal/model"
)

func SocialToResponse(social *entity.Social) *model.SocialResponse {
	return &model.SocialResponse{
		ID:          social.ID,
		Title:       social.Title,
		Platform:    social.Platform,
		PlatformUrl: social.PlatformUrl,
	}
}
