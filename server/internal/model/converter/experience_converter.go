package converter

import (
	"tratech.my.id/server/internal/entity"
	"tratech.my.id/server/internal/model"
)

func ExperienceToResponse(exp *entity.Experience) *model.ExperienceResponse {
	return &model.ExperienceResponse{
		ID:             exp.ID,
		Position:       exp.Position,
		Company:        exp.Company,
		CompanyUrl:     exp.CompanyUrl,
		LogoUrl:        exp.LogoUrl,
		Location:       exp.Location,
		EmploymentType: exp.EmploymentType,
		LocationType:   exp.LocationType,
		StartDate:      exp.StartDate,
		EndDate:        exp.EndDate,
		IsCurrent:      exp.IsCurrent,
		Description:    exp.Description,
	}
}
