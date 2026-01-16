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
	c.SetupPublicRoute()
	c.SetupAuthRoute()
}

func (c *RouteConfig) SetupGuestRoute() {
	c.App.Post("/api/users", c.UserController.Register)
	c.App.Post("/api/users/_login", c.UserController.Login)
}

func (c *RouteConfig) SetupAuthRoute() {
	c.App.Use(c.AuthMiddleware)
	c.App.Delete("/api/users", c.UserController.Logout)
	c.App.Patch("/api/users/_current", c.UserController.Update)
	c.App.Get("/api/users/_current", c.UserController.Current)

	c.App.Get("/api/achievements", c.AchievementController.GetAll)
	c.App.Get("/api/achievement/:achievementId", c.AchievementController.Get)
	c.App.Post("/api/achievements", c.AchievementController.Create)
	c.App.Put("/api/achievements/:achievementId", c.AchievementController.Update)

}

func (c *RouteConfig) SetupPublicRoute() {
	c.App.Get("/api/public/:username/achievements", c.AchievementController.GetAllByUsername)
}
