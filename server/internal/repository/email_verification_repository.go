package repository

import (
	"gorm.io/gorm"
	"tratech.my.id/server/internal/entity"
)

type EmailVerificationRepository struct {
	Repository[entity.EmailVerification]
}

func (r *EmailVerificationRepository) FindByCodeAndEmail(db *gorm.DB, EmailVerification *entity.EmailVerification, otpCode string, email string) error {
	return db.Where("otp_code = ? AND email = ?", otpCode, email).Find(EmailVerification).Error
}
