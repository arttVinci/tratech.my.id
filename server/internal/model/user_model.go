package model

type UserResponse struct {
	ID        string `json:"id,omitempty"`
	Name      string `json:"name,omitempty"`
	NoTelp    string `json:"no_telp,omitempty"`
	Email     string `json:"email,omitempty"`
	CreatedAt int64  `json:"created_at,omitempty"`
	UpdatedAt int64  `json:"updated_at,omitempty"`
}

type LoginUserResponse struct {
	User  UserResponse `json:"user"`
	Token string       `json:"token"`
}

type RegisterUserRequest struct {
	ID       string `json:"id" validate:"required,max=100"`
	Password string `json:"password" validate:"required,max=100"`
	Name     string `json:"name" validate:"required,max=100"`
	NoTelp   string `json:"no_telp,omitempty"`
	Email    string `json:"email,omitempty"`
}

type UpdateUserRequest struct {
	ID       string `json:"-" validate:"required,max=100"`
	Password string `json:"password,omitempty" validate:"max=100"`
	Name     string `json:"name,omitempty" validate:"max=100"`
	NoTelp   string `json:"no_telp,omitempty"`
	Email    string `json:"email,omitempty"`
}

type LoginUserRequest struct {
	ID       string `json:"id" validate:"required,max=100"`
	Password string `json:"password" validate:"required,max=100"`
}

type LogoutUserRequest struct {
	ID uint `json:"id" validate:"required,max=100"`
}

type GetUserRequest struct {
	ID uint `json:"id" validate:"required,max=100"`
}
