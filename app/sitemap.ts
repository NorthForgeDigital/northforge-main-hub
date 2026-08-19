import type { MetadataRoute } from "next"
import { services } from "@/lib/services"

const baseUrl = "https://northforge-main-hub.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/funnels", "/funnels/fit-7", "/start-project", "/case-studies/northforge-internal-build", "/privacy", "/terms", "/intellectual-property"]
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...services.map((service) => ({ url: `${baseUrl}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ]
}
