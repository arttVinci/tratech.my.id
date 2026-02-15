package model

type SocialResponse struct {
	ID          string `json:"-" validate:"required"`
	Title       string `gorm:"column:name"`
	Platform    string `gorm:"column:platform"`
	PlatformUrl string `gorm:"column:platform_url"`
}

type CreateSocialRequest struct {
	UserId      string `gorm:"-" validate:"required"`
	Title       string `gorm:"column:name"`
	Platform    string `gorm:"column:platform"`
	PlatformUrl string `gorm:"column:platform_url"`
}

type UpdateSocialRequest struct {
	ID          string `json:"-" validate:"required"`
	UserId      string `gorm:"-" validate:"required"`
	Title       string `gorm:"column:name"`
	Platform    string `gorm:"column:platform"`
	PlatformUrl string `gorm:"column:platform_url"`
}

type DeleteSocialRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetSocialRequest struct {
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetByIdSocialRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Public
type GetPublicSocialRequest struct {
	Username string `json:"-" validate:"required"`
}

// Public
type GetPublicSocialByIdRequest struct {
	ID       string `json:"-" validate:"required,max=100"`
	Username string `json:"-" validate:"required"`
}
