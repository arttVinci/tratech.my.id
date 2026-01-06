package entity

import "tratech.my.id/server/internal/model"

type Project struct {
	ID          uint   `gorm:"column:id;primaryKey"`
	UserId      uint   `gorm:"column:id_user"`
	Title       string `gorm:"column:title"`
	ImageUrl    string `gorm:"column:image_url"`
	Description string `gorm:"column:description"`
	GithubUrl   string `gorm:"column:github_url"`
	LiveUrl     string `gorm:"column:live_url"`
	Challange   string `gorm:"column:challange"`
	Solution    string `gorm:"column:solution"`
	IsFeatured  bool   `gorm:"column:is_featured"`

	Tags      []string               `gorm:"type:json;serializer:json"`
	TechStack []model.TechItem       `gorm:"type:json;serializer:json"`
	Features  []model.ProjectFeature `gorm:"type:json;serializer:json"`
}
