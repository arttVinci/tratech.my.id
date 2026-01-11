package entity

type User struct {
	ID        string `gorm:"column:id;primaryKey"`
	Name      string `gorm:"column:name"`
	Password  string `gorm:"column:password"`
	Notelp    string `gorm:"column:no_telp;unique"`
	Email     string `gorm:"column:email;unique"`
	CreatedAt int64  `gorm:"column:created_at;autoCreateTime:milli"`
	UpdatedAt int64  `gorm:"column:updated_at;autoCreateTime:milli;autoUpdateTime:milli"`

	// Relasi
	Profile *Profile `gorm:"foreignKey:UserId;references:ID"`
}

func (u *User) TableName() string {
	return "users"
}
