package entity

import "time"

type Achievement struct {
	ID            string     `gorm:"column:id;primaryKey"`
	UserId        string     `gorm:"column:user_id"`
	Title         string     `gorm:"column:title"`
	ImageUrl      string     `gorm:"column:image_url"`
	Organization  string     `gorm:"column:organization"`
	IssuedDate    *time.Time `gorm:"column:issued_date"`
	CredentialUrl string     `gorm:"column:credential_url"`
	CredentialId  string     `gorm:"column:credential_id"`
}

func (u *Achievement) TableName() string {
	return "achievements"
}
