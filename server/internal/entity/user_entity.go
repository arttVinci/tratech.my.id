package entity

import "time"

type User struct {
	ID        uint   `gorm:"column:id;primaryKey"`
	Nama      string `gorm:"column:name"`
	Notelp    string `gorm:"column:no_telp;unique"`
	Email     string `gorm:"column:email;unique"`
	Password  string `gorm:"column:password"`
	CreatedAt *time.Time
	UpdatedAt *time.Time

	// Relasi
	Profile *Profile `gorm:"foreignKey:UserId;references:ID"`
}

func (u *User) TableName() string {
	return "users"
}
