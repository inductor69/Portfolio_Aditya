import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { getPostsByCategory } from "@/features/blog/data/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const components = getPostsByCategory("components").map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const routes = ["", "/components"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...components]
}
