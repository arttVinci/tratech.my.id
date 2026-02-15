package entity

type Social struct {
	ID          string `gorm:"column:id;primaryKey"`
	UserId      string `gorm:"column:user_id"`
	Title       string `gorm:"column:title"`
	Platform    string `gorm:"column:name"`
	PlatformUrl string `gorm:"column:platform_url"`

	CreatedAt int64 `gorm:"column:created_at;autoCreateTime:milli"`
	UpdatedAt int64 `gorm:"column:updated_at;autoCreateTime:milli;autoUpdateTime:milli"`

	User User `gorm:"foreignKey:user_id;references:id"`
}

func (a *Social) TableName() string {
	return "socials"
}
