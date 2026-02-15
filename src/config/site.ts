import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://meaditya.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  // {
  //   title: "Sponsors",
  //   href: "/sponsors",
  // },
]

export const GITHUB_USERNAME = "inductor69"
export const SOURCE_CODE_GITHUB_REPO = "ncdai/chanhdai.com"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/ncdai/chanhdai.com"

export const SPONSORSHIP_URL = "https://github.com/sponsors/ncdai"

export const UTM_PARAMS = {
  utm_source: "meaditya.com",
}
