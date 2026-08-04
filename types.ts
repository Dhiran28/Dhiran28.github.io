import { LucideIcon } from 'lucide-react';

export type ProjectFilter = 'VR' | 'AR' | 'XR' | 'IoT' | 'AI';

export interface Project {
  id: string;
  title: string;
  category: string;
  filter: ProjectFilter;
  description: string;
  problem?: string;
  solution?: string;
  impact?: string;
  tags: string[];
  imageUrl: string; 
  featured?: boolean;
  link?: string;
  role?: string;
  year?: string;
  client?: string;
  challenge?: string;
  outcome?: string;
}

export interface WhatIBuildCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}