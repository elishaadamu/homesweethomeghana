import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Home Sweet Home Ghana Network | Ghana, Our Heritage, Our Pride",
  description:
    "HSH Network — A vibrant global community uniting Ghanaians at home and in the diaspora through friendship, collaboration, cultural pride, and charitable service. Headquartered in Accra, Ghana.",
  keywords: [
    "Ghana", "Ghanaian community", "diaspora", "HSH Network",
    "Home Sweet Home Ghana", "charity", "social club", "Accra",
  ],
  openGraph: {
    title: "Home Sweet Home Ghana Network",
    description: "Where Friendship Meets Purpose — Uniting Ghanaians worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-hsh-off-white text-hsh-dark-text">
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
