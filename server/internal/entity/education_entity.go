package entity

import "time"

type Education struct {
	ID           string `gorm:"column:id;primaryKey"`
	UserId       string `gorm:"column:user_id"`
	Institution  string `gorm:"column:institution"`
	Degree       string `gorm:"column:degree"`
	FieldOfStudy string `gorm:"column:field_of_study"`
	Grade        string `gorm:"column:grade"`
	LogoUrl      string `gorm:"column:logo_url"`
	Location     string `gorm:"column:location"`

	StartDate time.Time  `gorm:"column:start_date"`
	EndDate   *time.Time `gorm:"column:end_date"`
	IsCurrent bool       `gorm:"column:is_current"`

	Description string `gorm:"column:description"`

	CreatedAt int64 `gorm:"column:created_at;autoCreateTime:milli"`
	UpdatedAt int64 `gorm:"column:updated_at;autoCreateTime:milli;autoUpdateTime:milli"`

	User User `gorm:"foreignKey:user_id;references:id"`
}

func (e *Education) TableName() string {
	return "educations"
}
