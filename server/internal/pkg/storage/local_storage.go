package storage

import (
	"fmt"
	"io"
	"mime/multipart"
	"os"
	"path/filepath"
	"time"
)

type FileStorage interface {
	SaveLocalImage(fileHeader *multipart.FileHeader) (string, error)
}

type LocalStorage struct {
	BaseURL string
}

func NewLocalStorage(baseURL string) FileStorage {
	return &LocalStorage{
		BaseURL: baseURL,
	}
}

func (s *LocalStorage) SaveLocalImage(fileHeader *multipart.FileHeader) (string, error) {
	uniqueName := fmt.Sprintf("%d-%s", time.Now().Unix(), fileHeader.Filename)
	saveDir := "./public/uploads"
	savePath := filepath.Join(saveDir, uniqueName)

	// Buat folder public/uploads jika belum ada
	if err := os.MkdirAll(saveDir, os.ModePerm); err != nil {
		return "", err
	}

	// Buka file dari request HTTP
	src, err := fileHeader.Open()
	if err != nil {
		return "", err
	}
	defer src.Close()

	// Buat file tujuan di server
	dst, err := os.Create(savePath)
	if err != nil {
		return "", err
	}
	defer dst.Close()

	// Salin isi gambar ke file tujuan
	if _, err := io.Copy(dst, src); err != nil {
		return "", err
	}

	// Buat URL yang bisa diakses oleh Frontend
	imageUrl := fmt.Sprintf("%s/public/uploads/%s", s.BaseURL, uniqueName)
	return imageUrl, nil
}
