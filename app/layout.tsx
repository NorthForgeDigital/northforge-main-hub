import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const siteTitle = "NorthForge Digital Solutions | Digital Services, Systems & Business Support"
const siteDescription =
  "Managed project-based digital services, business systems, content support, websites, funnel systems, automation, AI setup, and related business support."

export const metadata: Metadata = {
  metadataBase: new URL("https://northforge-main-hub.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "digital services",
    "business systems",
    "business support",
    "automation",
    "AI setup",
    "websites",
    "funnel systems",
    "content support",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "NorthForge Digital Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
}

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "NorthForge Digital Solutions",
            url: "https://northforge-main-hub.vercel.app",
            email: "hello.northforge@gmail.com",
            description: siteDescription,
            areaServed: "Worldwide",
          }).replace(/</g, "\\u003c") }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
