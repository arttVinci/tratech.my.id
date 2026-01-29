package model

import "time"

type EducationResponse struct {
	ID           string     `json:"id"`
	Institution  string     `json:"institution"`
	Degree       string     `json:"degree"`
	FieldOfStudy string     `json:"field_of_study"`
	Grade        string     `json:"grade"`
	LogoUrl      string     `json:"logo_url"`
	Location     string     `json:"location"`
	StartDate    time.Time  `json:"start_date"`
	EndDate      *time.Time `json:"end_date"`
	IsCurrent    bool       `json:"is_current"`
	Description  string     `json:"description"`
}

type CreateEducationRequest struct {
	UserId       string     `json:"-" validate:"required"`
	Institution  string     `json:"institution" validate:"required,max=100"`
	Degree       string     `json:"degree" validate:"omitempty,max=100"`
	FieldOfStudy string     `json:"field_of_study" validate:"omitempty,max=100"`
	Grade        string     `json:"grade" validate:"omitempty,max=50"`
	LogoUrl      string     `json:"logo_url"`
	Location     string     `json:"location" validate:"omitempty,max=100"`
	StartDate    time.Time  `json:"start_date" validate:"required"`
	EndDate      *time.Time `json:"end_date"`
	IsCurrent    bool       `json:"is_current"`
	Description  string     `json:"description"`
}

type UpdateEducationRequest struct {
	ID           string     `json:"-" validate:"required,max=100,uuid"`
	UserId       string     `json:"-" validate:"required"`
	Institution  string     `json:"institution" validate:"omitempty,max=100"`
	Degree       string     `json:"degree" validate:"omitempty,max=100"`
	FieldOfStudy string     `json:"field_of_study" validate:"omitempty,max=100"`
	Grade        string     `json:"grade" validate:"omitempty,max=50"`
	LogoUrl      string     `json:"logo_url"`
	Location     string     `json:"location" validate:"omitempty,max=100"`
	StartDate    time.Time  `json:"start_date"`
	EndDate      *time.Time `json:"end_date"`
	IsCurrent    bool       `json:"is_current"`
	Description  string     `json:"description"`
}

type DeleteEducationRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetEducationRequest struct {
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetByIdEducationRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Public
type GetPublicEducationRequest struct {
	Username string `json:"-" validate:"required"`
}

// Public
type GetPublicEducationByIdRequest struct {
	ID       string `json:"-" validate:"required,max=100"`
	Username string `json:"-" validate:"required"`
}
