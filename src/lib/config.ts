import { MainNavItem } from "@/lib/types";

export const siteConfig = {
  name: "Makje",
  url: "https://makje.com",
  description: "Makje's portfolio website",
  links: {
    github: "https://github.com/markjaylunas",
    linkedin: "https://www.linkedin.com/in/markjaylunas",
  },
};

export type SiteConfig = typeof siteConfig;

interface RoutesConfig {
  mainNav: MainNavItem[];
}

export const routesConfig: RoutesConfig = {
  mainNav: [
    {
      title: "Works",
      href: "/works",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
