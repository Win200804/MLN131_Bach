import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Dân chủ XHCN & Nhà nước XHCN | So sánh Dân chủ hình thức và Thực chất",
  description:
    "Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa: So sánh Nhà nước Tư sản và Nhà nước XHCN, phân tích dân chủ hình thức và dân chủ thực chất theo quan điểm Mác - Lênin.",
  keywords: [
    "Dân chủ XHCN",
    "Nhà nước XHCN",
    "Nhà nước Tư sản",
    "Dân chủ hình thức",
    "Dân chủ thực chất",
    "Mác - Lênin",
    "Pháp luật",
    "Giai cấp",
  ],
  authors: [{ name: "Dự án giáo dục" }],
  creator: "Dự án giáo dục",
  publisher: "Dự án giáo dục",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "",
    siteName: "Dân chủ XHCN & Nhà nước XHCN",
    title: "Dân chủ XHCN & Nhà nước XHCN | So sánh Dân chủ hình thức và Thực chất",
    description:
      "Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa: So sánh Nhà nước Tư sản và Nhà nước XHCN theo quan điểm Mác - Lênin.",
    images: [
      {
        url: "/images/section1/1.jpg",
        width: 1200,
        height: 630,
        alt: "Dân chủ XHCN và Nhà nước XHCN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dân chủ XHCN & Nhà nước XHCN | So sánh Dân chủ hình thức và Thực chất",
    description:
      "Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa: So sánh Nhà nước Tư sản và Nhà nước XHCN theo quan điểm Mác - Lênin.",
    images: ["/images/section1/1.jpg"],
  },
  alternates: {
    canonical: "",
  },
  generator: "Next.js",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} ${playfairDisplay.variable} ${inter.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/section1/1.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/section1/2.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/background.jpg" as="image" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Dân chủ XHCN & Nhà nước XHCN",
                  description:
                    "Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa: So sánh Nhà nước Tư sản và Nhà nước XHCN, phân tích dân chủ hình thức và dân chủ thực chất.",
                  inLanguage: "vi-VN",
                },
                {
                  "@type": "CreativeWork",
                  name: "Dân chủ XHCN & Nhà nước XHCN | So sánh Dân chủ hình thức và Thực chất",
                  description:
                    "So sánh Nhà nước Tư sản và Nhà nước Xã hội chủ nghĩa theo quan điểm Mác - Lênin.",
                  inLanguage: "vi-VN",
                },
              ],
            }),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={`${spaceGrotesk.className} cursor-none`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
