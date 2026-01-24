package model

type ProfileResponse struct {
	ID         string `json:"id"`
	FullName   string `json:"full_name"`
	UrlProfile string `json:"url_profile"`
	Address    string `json:"address"`
	About      string `json:"about"`
	Bio        string `json:"bio"`
}

type CreateProfileRequest struct {
	UserId     string `json:"user_id"`
	FullName   string `json:"full_name"`
	UrlProfile string `json:"url_profile"`
	Address    string `json:"address"`
	About      string `json:"about"`
	Bio        string `json:"bio"`
}

type UpdateProfileRequest struct {
	ID         string `json:"id"`
	UserId     string `json:"user_id"`
	FullName   string `json:"full_name"`
	UrlProfile string `json:"url_profile"`
	Address    string `json:"address"`
	About      string `json:"about"`
	Bio        string `json:"bio"`
}

// Middleware
type GetProfileRequest struct {
	UserId string `json:"-" validate:"required"`
}

// Public
type GetPublicProfileRequest struct {
	Username string `json:"-" validate:"required"`
}

// Middleware
type GetByIdProfileRequest struct {
	ID     string `json:"-" validate:"required,max=100"`
	UserId string `json:"-" validate:"required"`
}

// Public
type GetPublicProfileByIdRequest struct {
	Username string `json:"-" validate:"required"`
}
