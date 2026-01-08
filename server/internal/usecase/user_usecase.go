package usecase

import (
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
	"tratech.my.id/server/internal/repository"
)

type UserUseCase struct {
	DB             *gorm.DB
	Log            *logrus.Logger
	UserRepository *repository.UserRepository
}

func NewUserUseCase(DB *gorm.DB, Log *logrus.Logger, UserRepo *repository.UserRepository) *UserUseCase {
	return &UserUseCase{
		DB:             DB,
		Log:            Log,
		UserRepository: UserRepo,
	}
}
