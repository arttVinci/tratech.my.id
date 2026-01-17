package usecase

import (
	"context"

	"github.com/go-playground/validator/v10"
	"github.com/sirupsen/logrus"
	"gorm.io/gorm"
	"tratech.my.id/server/internal/repository"
)

type ProfileUseCase struct {
	db          *gorm.DB
	log         *logrus.Logger
	validate    *validator.Validate
	profileRepo *repository.ProfileRepository
}

func NewProfileUseCase(
	db *gorm.DB,
	log *logrus.Logger,
	validate *validator.Validate,
	profileRepo *repository.ProfileRepository,
) *ProfileUseCase {
	return &ProfileUseCase{
		db:          db,
		log:         log,
		validate:    validate,
		profileRepo: profileRepo,
	}
}

func (u *ProfileUseCase) Create(ctx context.Context, request)
