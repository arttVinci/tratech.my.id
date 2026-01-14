package route

import (
	"github.com/gofiber/fiber/v2"
	"tratech.my.id/server/internal/delivery/http"
)

type RouteConfig struct {
	App                   *fiber.App
	UserController        *http.UserController
	AchievementController *http.AchievementController
	AuthMiddleware        fiber.Handler
}

func (c *RouteConfig) Setup() {
	c.SetupGuestRoute()
	c.SetupAuthRoute()
}

func (c *RouteConfig) SetupGuestRoute() {
	c.App.Post("/api/users", c.UserController.Register)
	c.App.Post("/api/users/_login", c.UserController.Login)
}

func (c *RouteConfig) SetupAuthRoute() {
	c.App.Use(c.AuthMiddleware)

	c.App.Get("/api/achievement", c.AchievementController.GetAll)
	c.App.Post("/api/achievement", c.AchievementController.Create)

}
