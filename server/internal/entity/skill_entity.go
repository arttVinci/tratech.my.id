package entity

type Skill struct {
	ID      string `gorm:"column:id;primaryKey"`
	UserId  string `gorm:"column:user_id"`
	Title   string `gorm:"column:title"`
	IconUrl string `gorm:"column:icon_url"`
	Level   string `gorm:"column:level"`

	CreatedAt int64 `gorm:"column:created_at;autoCreateTime:milli"`
	UpdatedAt int64 `gorm:"column:updated_at;autoCreateTime:milli;autoUpdateTime:milli"`

	User User `gorm:"foreignKey:user_id;references:id"`
}

func (s *Skill) TableName() string {
	return "skills"
}
