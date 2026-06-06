import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons";

// Shared icon type — supports both lucide-react style and react-icons style
export type IconComponent =
  | ComponentType<{ className?: string; size?: number | string; color?: string }>
  | IconType;

export interface TechStackItem {
  name: string;
  Icon: IconComponent;
  color: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
}

export interface Feature {
  title: string;
  key: string[];
}

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  techStack: TechStackItem[];
  gallery: GalleryItem[];
  features: Feature[];
  challenges: string;
  solution: string;
  featured: boolean;
}

export interface Certificate {
  id: number;
  image: string;
  title: string;
  organization: string;
  issuedDate: string;
  credentialUrl?: string;
  IdCredential: string;
  issuedLabel?: string;
}

export interface Experience {
  id: number;
  logo: string;
  title: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  type?: string;
  mode?: string;
  urlCompany: string;
  responsibilities: string[];
  edu?: boolean;
}

export interface MenuItemType {
  icon: IconComponent;
  label: string;
  route: string;
}
