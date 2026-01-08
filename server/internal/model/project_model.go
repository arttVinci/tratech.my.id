package model

type ProjectFeature struct {
	Title string   `json:"title"`
	Items []string `json:"items"`
}

type TechItem struct {
	Name  string `json:"name"`
	Icon  string `json:"icon"`
	Color string `json:"color"`
}

type ProjectGallery struct {
	Url     string `json:"url"`
	Caption string `json:"caption"`
}
