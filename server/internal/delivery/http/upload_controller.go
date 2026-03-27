package http

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"tratech.my.id/server/internal/model"
	"tratech.my.id/server/internal/pkg/storage"
)

type UploadController struct {
	Storage storage.FileStorage
	Log     *logrus.Logger
}

func NewUploadController(storage storage.FileStorage, logger *logrus.Logger) *UploadController {
	return &UploadController{
		Storage: storage,
		Log:     logger,
	}
}

// UploadImage godoc
// @Summary      Upload general image
// @Tags         Media
// @Accept       multipart/form-data
// @Produce      json
// @Param        image  formData  file  true  "File gambar"
// @Success      200    {object}  model.WebResponse[map[string]string]
// @Router       /api/upload/image [post]
func (c *UploadController) UploadImage(ctx *fiber.Ctx) error {
	// 1. Tangkap file dari form-data dengan key "images"
	file, err := ctx.FormFile("images")
	if err != nil {
		c.Log.WithError(err).Error("Failed getting image from FormFile")
		return fiber.NewError(fiber.StatusBadRequest, "File gambar tidak ditemukan")
	}

	// 2. Validasi Ukuran (Maksimal 2MB)
	if file.Size > 2*1024*1024 {
		c.Log.Warn("Upload failed: file size exceeds 2MB limit")
		return fiber.NewError(fiber.StatusBadRequest, "Ukuran file terlalu besar, maksimal 2MB")
	}

	// 3. Validasi Tipe File (Harus berawalan "image/")
	contentType := file.Header.Get("Content-Type")
	if !strings.HasPrefix(contentType, "image/") {
		c.Log.Warn("Upload failed: file is not an image")
		return fiber.NewError(fiber.StatusBadRequest, "File harus berupa gambar")
	}

	// 4. Serahkan ke pkg/storage untuk disimpan
	imageUrl, err := c.Storage.SaveLocalImage(file)
	if err != nil {
		c.Log.WithError(err).Error("Failed save image to server")
		// return err bawaan fiber, ErrorHandler akan merubahnya jadi 500
		return err
	}

	// 5. Kembalikan URL jika sukses
	return ctx.JSON(model.WebResponse[map[string]string]{
		Data:    map[string]string{"image_url": imageUrl},
		Success: true,
		Message: "Gambar berhasil diunggah",
	})
}
