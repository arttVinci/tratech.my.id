package model

import "time"

type ExperienceResponse struct {
	ID             string     `json:"id"`
	Position       string     `json:"position"`
	Company        string     `json:"company"`
	CompanyUrl     string     `json:"company_url"`
	LogoUrl        string     `json:"logo_url"`
	Location       string     `json:"location"`
	EmploymentType string     `json:"employment_type"`
	LocationType   string     `json:"location_type"`
	StartDate      time.Time  `json:"start_date"`
	EndDate        *time.Time `json:"end_date"`
	IsCurrent      bool       `json:"is_current"`
	Description    string     `json:"description"`
}

type CreateExperienceRequest struct {
	UserId         string     `json:"-" validate:"required"`
	Position       string     `json:"position" validate:"required,max=100"`
	Company        string     `json:"company" validate:"required,max=100"`
	CompanyUrl     string     `json:"company_url" validate:"omitempty,max=255"`
	LogoUrl        string     `json:"logo_url"`
	Location       string     `json:"location" validate:"omitempty,max=100"`
	EmploymentType string     `json:"employment_type" validate:"omitempty,max=50"`
	LocationType   string     `json:"location_type" validate:"omitempty,max=50"`
	StartDate      time.Time  `json:"start_date" validate:"required"`
	EndDate        *time.Time `json:"end_date"`
	IsCurrent      bool       `json:"is_current"`
	Description    string     `json:"description"`
}

type UpdateExperienceRequest struct {
	ID             string     `json:"-" validate:"required,max=100,uuid"`
	UserId         string     `json:"-" validate:"required"`
	Position       string     `json:"position" validate:"omitempty,max=100"`
	Company        string     `json:"company" validate:"omitempty,max=100"`
	CompanyUrl     string     `json:"company_url" validate:"omitempty,max=255"`
	LogoUrl        string     `json:"logo_url"`
	Location       string     `json:"location" validate:"omitempty,max=100"`
	EmploymentType string     `json:"employment_type" validate:"omitempty,max=50"`
	LocationType   string     `json:"location_type" validate:"omitempty,max=50"`
	StartDate      time.Time  `json:"start_date"`
	EndDate        *time.Time `json:"end_date"`
	IsCurrent      bool       `json:"is_current"`
	Description    string     `json:"description"`
}

type DeleteExperienceRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetExperienceRequest struct {
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetByIdExperienceRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Public
type GetPublicExperienceRequest struct {
	Username string `json:"-" validate:"required"`
}

// Public
type GetPublicExperienceByIdRequest struct {
	ID       string `json:"-" validate:"required,max=100"`
	Username string `json:"-" validate:"required"`
}
