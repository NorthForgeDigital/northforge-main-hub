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

export const metadata: Metadata = {
  metadataBase: new URL("https://northforge-main-hub.vercel.app"),
  title: "NorthForge Digital Solutions | AI-Enhanced Digital Systems",
  description:
    "Structured digital services, business systems, content support, automation, websites and lead-booking funnels.",
  keywords: [
    "AI",
    "digital agency",
    "automation",
    "branding",
    "content creation",
    "workflow automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "NorthForge Digital Solutions | AI-Enhanced Digital Systems",
    description: "Structured digital services, business systems, content support, automation, websites and lead-booking funnels.",
    url: "/",
    siteName: "NorthForge Digital Solutions",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
            description: "Structured digital services, business systems, content support, automation, websites and lead-booking funnels.",
            areaServed: "Worldwide",
          }).replace(/</g, "\\u003c") }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
