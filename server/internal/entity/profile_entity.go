package entity

type Profile struct {
	ID         uint   `gorm:"column:id;primaryKey"`
	UserId     uint   `gorm:"column:id_user"`
	FullName   string `gorm:"column:full_name"`
	Address    string `gorm:"column:address"`
	About      string `gorm:"column:about"`
	Bio        string `gorm:"column:bio"`
	UrlProfile string `gorm:"column:url_profile"`
}
