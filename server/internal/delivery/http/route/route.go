package route

import (
	"github.com/gofiber/fiber/v2"
	"tratech.my.id/server/internal/delivery/http"
)

type RouteConfig struct {
	App                   *fiber.App
	UserController        *http.UserController
	AchievementController *http.achievement
	AuthMiddleware        fiber.Handler
}
