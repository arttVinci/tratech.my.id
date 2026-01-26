package route

import (
	"github.com/gofiber/fiber/v2"
	"tratech.my.id/server/internal/delivery/http"
)

type RouteConfig struct {
	App                   *fiber.App
	AuthMiddleware        fiber.Handler
	UserController        *http.UserController
	ProfileController     *http.ProfileController
	AchievementController *http.AchievementController
	ProjectController     *http.ProjectController
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
	c.App.Get("/api/achievements/:achievementId", c.AchievementController.Get)
	c.App.Post("/api/achievements", c.AchievementController.Create)
	c.App.Put("/api/achievements/:achievementId", c.AchievementController.Update)
	c.App.Delete("/api/achievements/:achievementId", c.AchievementController.Delete)

	c.App.Get("/api/projects", c.AchievementController.GetAll)
	c.App.Get("/api/projects/:projectId", c.AchievementController.Get)
	c.App.Post("/api/projects", c.AchievementController.Create)
	c.App.Put("/api/projects/:projectId", c.AchievementController.Update)
	c.App.Delete("/api/projects/:projectId", c.ProjectController.Delete)
}

func (c *RouteConfig) SetupPublicRoute() {
	c.App.Get("/api/public/:username", c.ProfileController.GetByUsername)

	c.App.Get("/api/public/:username/achievements", c.AchievementController.GetAllByUsername)
	c.App.Get("/api/public/:username/achievements/:achievementId", c.AchievementController.GetByUsername)

	c.App.Get("/api/public/:username/projects", c.ProjectController.GetAllByUsername)
	c.App.Get("/api/public/:username/projects/:projectId", c.ProjectController.GetByUsername)
}
