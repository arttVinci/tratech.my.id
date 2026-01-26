package config

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
	"gorm.io/gorm"
	"tratech.my.id/server/internal/delivery/http"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/delivery/http/route"
	"tratech.my.id/server/internal/repository"
	"tratech.my.id/server/internal/usecase"
)

type BootstrapConfig struct {
	App      *fiber.App
	DB       *gorm.DB
	Config   *viper.Viper
	Log      *logrus.Logger
	Validate *validator.Validate
}

func Bootstrap(config *BootstrapConfig) {
	//Setup Repository
	userRepository := repository.NewUserRepository(config.Log)
	profileRepository := repository.NewProfileRepository()
	achievementRepository := repository.NewAchievementRepository()
	projectRepository := repository.NewProjectRepository()

	//Setup UseCase
	userUseCase := usecase.NewUserUseCase(config.DB, config.Log, config.Validate, userRepository, config.Config)
	profileUseCase := usecase.NewProfileUseCase(config.DB, config.Log, config.Validate, profileRepository)
	achievementUseCase := usecase.NewAchievementUseCase(config.DB, config.Log, config.Validate, achievementRepository)
	projectUseCase := usecase.NewProjectUsecase(config.DB, config.Log, config.Validate, projectRepository)

	//Setup Controller
	userController := http.NewUserController(userUseCase, config.Log)
	profileController := http.NewProfileController(profileUseCase, config.Log)
	achievementController := http.NewAchievementController(achievementUseCase, config.Log)
	projectController := http.NewProjectController(projectUseCase, config.Log)

	//Setup Middleware
	authMiddleware := middleware.AuthMiddleware(config.Config)

	routeConfig := route.RouteConfig{
		App:                   config.App,
		AuthMiddleware:        authMiddleware,
		UserController:        userController,
		ProfileController:     profileController,
		AchievementController: achievementController,
		ProjectController:     projectController,
	}
	routeConfig.Setup()
}
