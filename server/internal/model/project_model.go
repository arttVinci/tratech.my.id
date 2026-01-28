package model

type ProjectFeature struct {
	Title string   `json:"title"`
	Items []string `json:"items"`
}

type TechItem struct {
	Name  string `json:"name"`
	Icon  string `json:"icon"`
	Color string `json:"color"`
}

type ProjectGallery struct {
	Url     string `json:"url"`
	Caption string `json:"caption"`
}

type ProjectResponse struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	GithubUrl   string `json:"github_url"`
	LiveUrl     string `json:"live_url"`
	IsFeatured  bool   `json:"featured"`
	Challenges  string `json:"challenges"`
	Solution    string `json:"solution"`

	Tags      []string         `json:"tags"`
	TechStack []TechItem       `json:"techStack"`
	Gallery   []ProjectGallery `json:"gallery"`
	Features  []ProjectFeature `json:"features"`

	CreatedAt int64 `json:"createdAt"`
}

type CreateProjectRequest struct {
	UserId      string `json:"-" validate:"required"`
	Title       string `json:"title" validate:"required"`
	Description string `json:"description" validate:"required"`
	Image       string `json:"image" validate:"required"`
	GithubUrl   string `json:"githubUrl"`
	LiveUrl     string `json:"liveUrl"`
	Challenges  string `json:"challenges"`
	Solution    string `json:"solution"`
	IsFeatured  bool   `json:"featured"`

	Tags      []string         `json:"tags"`
	TechStack []TechItem       `json:"techStack"`
	Gallery   []ProjectGallery `json:"gallery"`
	Features  []ProjectFeature `json:"features"`
}

type UpdateProjectRequest struct {
	ID          string `json:"-" validate:"required,max=100,uuid"`
	UserId      string `json:"-" validate:"required"`
	Title       string `json:"title" validate:"required"`
	Description string `json:"description" validate:"required"`
	Image       string `json:"image" validate:"required"`
	GithubUrl   string `json:"githubUrl"`
	LiveUrl     string `json:"liveUrl"`
	Challenges  string `json:"challenges"`
	Solution    string `json:"solution"`
	IsFeatured  bool   `json:"featured"`

	Tags      []string         `json:"tags"`
	TechStack []TechItem       `json:"techStack"`
	Gallery   []ProjectGallery `json:"gallery"`
	Features  []ProjectFeature `json:"features"`
}

type DeleteProjectRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetProjectRequest struct {
	UserId string `json:"-" validate:"required"`
}

// Middleware
type GetByIdProjectRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Public
type GetPublicProjectRequest struct {
	Username string `json:"-" validate:"required"`
}

// Public
type GetPublicProjectByIdRequest struct {
	ID       string `json:"-" validate:"required,max=100"`
	Username string `json:"-" validate:"required"`
}
