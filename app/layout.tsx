import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import { AlertProvider } from "./context/AlertContext";
import GlobalAlert from "./components/GlobalAlert";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://homesweethomeghana.com";

export const viewport: Viewport = {
  themeColor: "#002576",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Home Sweet Home Ghana Network | Ghana, Our Heritage, Our Pride",
    template: "%s | Home Sweet Home Ghana Network",
  },
  description:
    "Home Sweet Home Ghana Network (HSH) is a vibrant global community uniting Ghanaians at home and across the diaspora through friendship, cultural pride, business networking, and impactful charitable service. Headquartered in Accra, Ghana.",
  applicationName: "Home Sweet Home Ghana Network",
  authors: [{ name: "Home Sweet Home Ghana Network", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Home Sweet Home Ghana",
    "HSH Network",
    "Ghanaian Community",
    "Ghana Diaspora",
    "Ghana Heritage and Pride",
    "Charity in Ghana",
    "Accra Social Club",
    "Ghana Networking",
    "Global Ghanaians",
    "Ghanaians Abroad",
    "Ghanaians in UK",
    "Ghanaians in USA",
    "Ghana Youth Empowerment",
    "Philanthropy Ghana",
  ],
  creator: "Home Sweet Home Ghana Network",
  publisher: "Home Sweet Home Ghana Network",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home Sweet Home Ghana Network | Ghana, Our Heritage, Our Pride",
    description:
      "Where Friendship Meets Purpose — A vibrant global network uniting Ghanaians at home and across the diaspora through cultural pride, networking, and charitable impact.",
    url: siteUrl,
    siteName: "Home Sweet Home Ghana Network",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Home Sweet Home Ghana Network - Where Friendship Meets Purpose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Sweet Home Ghana Network | Ghana, Our Heritage, Our Pride",
    description:
      "Where Friendship Meets Purpose — Uniting Ghanaians worldwide through cultural pride, friendship, and charitable service.",
    images: ["/og-image.png"],
    creator: "@HSHGhanaNetwork",
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  category: "community",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Home Sweet Home Ghana Network",
      alternateName: "HSH Network",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon-512.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://www.facebook.com/HomeSweetHomeGhanaNetwork",
      ],
      email: "support@homesweethomeghana.com",
      description:
        "A vibrant global community uniting Ghanaians at home and in the diaspora through friendship, collaboration, cultural pride, and charitable service.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Home Sweet Home Ghana Network",
      description: "Ghana, Our Heritage, Our Pride — Where Friendship Meets Purpose",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-hsh-off-white text-hsh-dark-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          <AlertProvider>
            <GlobalAlert />
            {children}
          </AlertProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
