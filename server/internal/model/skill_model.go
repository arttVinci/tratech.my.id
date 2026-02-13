package model

type SkillResponse struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	IconUrl string `json:"icon_url"`
	Level   string `json:"level"`
}

type CreateSkillRequest struct {
	UserId  string `gorm:"-"`
	Name    string `gorm:"column:name"`
	IconUrl string `gorm:"column:icon_url"`
	Level   string `gorm:"column:level"`
}

type UpdateSkillRequest struct {
	ID      string `json:"-" validate:"required"`
	UserId  string `gorm:"-" validate:"required"`
	Name    string `gorm:"column:name"`
	IconUrl string `gorm:"column:icon_url"`
	Level   string `gorm:"column:level"`
}

type DeleteSkillRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetSkillRequest struct {
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetByIdSkillRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Public
type GetPublicSkillRequest struct {
	Username string `json:"-" validate:"required"`
}

// Public
type GetPublicSkillByIdRequest struct {
	ID       string `json:"-" validate:"required,max=100"`
	Username string `json:"-" validate:"required"`
}
