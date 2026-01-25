package converter

import (
	"tratech.my.id/server/internal/entity"
	"tratech.my.id/server/internal/model"
)

func ProjectToResponse(project *entity.Project) *model.ProjectResponse {
	return &model.ProjectResponse{
		ID:          project.ID,
		Title:       project.Title,
		Description: project.Description,
		Image:       project.ImageUrl,
		GithubUrl:   project.GithubUrl,
		LiveUrl:     project.LiveUrl,
		IsFeatured:  project.IsFeatured,
		Challenges:  project.Challenge,
		Solution:    project.Solution,

		// Data JSON langsung di-pass karena struct-nya kompatibel
		Tags:      project.Tags,
		TechStack: project.TechStack,
		Gallery:   project.Gallery,
		Features:  project.Features,

		CreatedAt: project.CreatedAt,
	}
}
