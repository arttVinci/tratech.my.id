package converter

import (
	"tratech.my.id/server/internal/entity"
	"tratech.my.id/server/internal/model"
)

func UserToResponse(user *entity.User) *model.UserResponse {
	return &model.UserResponse{
		ID:        user.ID,
		Name:      user.Name,
		Email:     user.Email,
		NoTelp:    user.Notelp,
		CreatedAt: user.CreatedAt,
		UpdatedAt: user.UpdatedAt,
	}
}
