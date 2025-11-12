import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://shinnycleaner.vercel.app"), 
  title: {
    default: "Shinny Cleaners | Professional Cleaning Services in Dubai",
    template: "%s | Shinny Cleaners",
  },
  description:
    "Shinny Cleaners offers professional home, office, and commercial cleaning services in Dubai. Our experienced team delivers spotless, hygienic, and eco-friendly cleaning solutions for your comfort.",
  keywords: [
    "cleaning services Dubai",
    "home cleaning Dubai",
    "office cleaning Dubai",
    "deep cleaning",
    "commercial cleaning",
    "Shinny Cleaners",
  ],
  authors: [{ name: "Shinny Cleaners Team", url: "https://shinnycleaner.com" }],
  creator: "Shinny Cleaners",
  publisher: "Shinny Cleaners",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Shinny Cleaners | Professional Cleaning Services in Dubai",
    description:
      "Trusted cleaning company in Dubai offering home, office, and commercial cleaning with eco-friendly products and 24/7 support.",
    url: "https://shinnycleaner.vercel.app",
    siteName: "Shinny Cleaners",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Shinny Cleaners Team at Work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinny Cleaners | Professional Cleaning Services in Dubai",
    description:
      "Professional home and office cleaning services in Dubai. Eco-friendly, affordable, and reliable cleaning solutions by Shinny Cleaners.",
    images: ["/og-image.jpg"],
    creator: "@shinnycleaners",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
