package entity

type Profile struct {
	ID         uint   `gorm:"column:id;primaryKey"`
	UserId     uint   `gorm:"column:id_user"`
	FullName   string `gorm:"column:full_name"`
	UrlProfile string `gorm:"column:url_profile"`
	Address    string `gorm:"column:address"`
	About      string `gorm:"column:about"`
	Bio        string `gorm:"column:bio"`

	User User `gorm:"foreignKey:user_id;references:id"`
}

func (u *Profile) TableName() string {
	return "profiles"
}
