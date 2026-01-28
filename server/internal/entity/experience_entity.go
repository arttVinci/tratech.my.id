package entity

import "time"

type Experience struct {
	ID     string `gorm:"column:id;primaryKey"`
	UserId string `gorm:"column:user_id"`

	Position   string `gorm:"column:position"`
	Company    string `gorm:"column:company"`
	CompanyUrl string `gorm:"column:company_url"`
	LogoUrl    string `gorm:"column:logo_url"`
	Location   string `gorm:"column:location"`

	EmploymentType string `gorm:"column:employment_type"`
	LocationType   string `gorm:"column:location_type"`

	StartDate time.Time  `gorm:"column:start_date"`
	EndDate   *time.Time `gorm:"column:end_date"`
	IsCurrent bool       `gorm:"column:is_current"`

	Description string `gorm:"column:description"`

	CreatedAt int64 `gorm:"column:created_at;autoCreateTime:milli"`
	UpdatedAt int64 `gorm:"column:updated_at;autoCreateTime:milli;autoUpdateTime:milli"`
	
	User User `gorm:"foreignKey:user_id;references:id"`
}

func (e *Experience) TableName() string {
	return "experiences"
}
