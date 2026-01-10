package model

import "time"

type AchievementResponse struct {
	ID            string     `json:"id"`
	Title         string     `json:"title"`
	ImageUrl      string     `json:"image_url"`
	Organization  string     `json:"organization"`
	IssuedDate    *time.Time `json:"issued_date"`
	CredentialUrl string     `json:"credential_url"`
	CredentialId  string     `json:"credential_id"`
}

type CreateAchievementRequest struct {
	UserId        uint       `json:"-" validate:"required"`
	Title         string     `json:"title" validate:"required,max=100"`
	ImageUrl      string     `json:"image_url"`
	Organization  string     `json:"organization" validate:"required,max=100"`
	IssuedDate    *time.Time `json:"issued_date"`
	CredentialUrl *string    `json:"credential_url"`
	CredentialId  *string    `json:"credential_id"`
}
