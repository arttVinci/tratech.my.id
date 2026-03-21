package http

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/delivery/http/middleware"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/usecase"
)

type ProfileController struct {
	UseCase *usecase.ProfileUseCase
	Log     *logrus.Logger
}

func NewProfileController(useCase *usecase.ProfileUseCase, log *logrus.Logger) *ProfileController {
	return &ProfileController{
		UseCase: useCase,
		Log:     log,
	}
}

// Create godoc
// @Summary      Create profile
// @Description  Buat profil untuk user yang sedang login
// @Tags         Profile
// @Accept       json
// @Produce      json
// @Param        request  body      model.CreateProfileRequest  true  "Request body"
// @Success      200      {object}  model.WebResponse[model.ProfileResponse]
// @Failure      400      {object}  model.ApiErrorResponse
// @Failure      401      {object}  model.ApiErrorResponse
// @Security     BearerAuth
// @Router       /api/profiles [post]
func (c *ProfileController) Create(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.CreateProfileRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing body request")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID

	response, err := c.UseCase.Create(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("Error creating profile")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProfileResponse]{Data: response})
}

// Update godoc
// @Summary      Update profile
// @Description  Update profil milik user yang sedang login
// @Tags         Profile
// @Accept       json
// @Produce      json
// @Param        request  body      model.UpdateProfileRequest  true  "Request body"
// @Success      200      {object}  model.WebResponse[model.ProfileResponse]
// @Failure      400      {object}  model.ApiErrorResponse
// @Failure      401      {object}  model.ApiErrorResponse
// @Security     BearerAuth
// @Router       /api/profiles [put]
func (c *ProfileController) Update(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := new(model.UpdateProfileRequest)
	if err := ctx.BodyParser(request); err != nil {
		c.Log.WithError(err).Error("error parsing request body")
		return fiber.ErrBadRequest
	}

	request.UserId = auth.ID

	response, err := c.UseCase.Update(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error update Profile")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProfileResponse]{Data: response})
}

// HandleUploadImage godoc
// @Summary      Upload profile image
// @Description  Upload foto profil user yang sedang login
// @Tags         Profile
// @Accept       multipart/form-data
// @Produce      json
// @Param        image  formData  file  true  "File gambar"
// @Success      200    {object}  model.WebResponse[model.ProfileResponse]
// @Failure      400    {object}  model.ApiErrorResponse
// @Failure      401    {object}  model.ApiErrorResponse
// @Security     BearerAuth
// @Router       /api/profiles/image [post]
func (c *ProfileController) HandleUploadImage(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetProfileRequest{
		UserId: auth.ID,
	}

	if err := c.UseCase.DeleteImageProfile(ctx.UserContext(), request); err != nil {
		c.Log.WithError(err).Error("failed Delete Image Profile")
		return err
	}

	file, err := ctx.FormFile("image_profile")
	if err != nil {
		c.Log.WithError(err).Error("Failed getting image from FormFile")
		return err
	}

	if file.Size > 4*1024*1024 {
		return ctx.Status(400).JSON(fiber.Map{"message": "File too large, max 2MB"})
	}

	contentType := file.Header.Get("Content-Type")
	if !strings.HasPrefix(contentType, "image/") {
		c.Log.WithError(err).Error("Failed save image to server")
		return ctx.Status(400).JSON(fiber.Map{"message": "The file must be an image"})
	}

	uniqueName := fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename)
	savePath := filepath.Join("./public/uploads", uniqueName)

	os.MkdirAll("./public/uploads", os.ModePerm)

	if err := ctx.SaveFile(file, savePath); err != nil {
		c.Log.WithError(err).Error("Failed save image to server")
		return err
	}

	imageUrl := fmt.Sprintf("http://127.0.0.1:3000/public/uploads/%s", uniqueName)

	response := &model.ProfileImageResponse{UrlProfile: imageUrl}
	return ctx.JSON(model.WebResponse[*model.ProfileImageResponse]{Data: response})
}

// Get godoc
// @Summary      Get profile (user)
// @Description  Ambil profil milik user yang sedang login
// @Tags         Profile
// @Produce      json
// @Success      200  {object}  model.WebResponse[model.ProfileResponse]
// @Failure      401  {object}  model.ApiErrorResponse
// @Failure      404  {object}  model.ApiErrorResponse
// @Security     BearerAuth
// @Router       /api/profiles [get]
func (c *ProfileController) Get(ctx *fiber.Ctx) error {
	auth := middleware.GetUser(ctx)

	request := &model.GetProfileRequest{
		UserId: auth.ID,
	}

	response, err := c.UseCase.Get(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get Profile")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProfileResponse]{Data: response})
}

// GetByUsername godoc
// @Summary      Get profile by username (public)
// @Description  Ambil profil publik berdasarkan username
// @Tags         Public
// @Produce      json
// @Param        username  path      string  true  "Username"
// @Success      200       {object}  model.WebResponse[model.ProfileResponse]
// @Failure      404       {object}  model.ApiErrorResponse
// @Router       /api/public/{username} [get]
func (c *ProfileController) GetByUsername(ctx *fiber.Ctx) error {
	username := ctx.Params("username")

	request := &model.GetPublicProfileRequest{
		Username: username,
	}

	response, err := c.UseCase.GetByUsername(ctx.UserContext(), request)
	if err != nil {
		c.Log.WithError(err).Error("error get Profile")
		return err
	}

	return ctx.JSON(model.WebResponse[*model.ProfileResponse]{Data: response})
}
