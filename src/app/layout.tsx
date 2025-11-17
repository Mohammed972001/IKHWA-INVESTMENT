import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IKHWA INVESTMENTS | Investment Solutions in Morocco",
    template: "%s | IKHWA INVESTMENTS"
  },
  description: "IKHWA INVESTMENTS - Your trusted partner for investment solutions and company formation in Morocco. We provide comprehensive services including feasibility studies, accounting supervision, and investment opportunities.",
  keywords: [
    "Morocco investment",
    "company formation Morocco",
    "IKHWA INVESTMENTS",
    "business setup Morocco",
    "Meknes investment",
    "foreign investment Morocco",
    "investment opportunities Morocco",
    "استثمار المغرب",
    "إنشاء شركات المغرب",
  ],
  authors: [{ name: "IKHWA INVESTMENTS" }],
  creator: "IKHWA INVESTMENTS",
  publisher: "IKHWA INVESTMENTS",
  metadataBase: new URL('https://www.ikhwainvestments.com'),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ikhwainvestments.com',
    title: 'IKHWA INVESTMENTS | Investment Solutions in Morocco',
    description: 'Your trusted partner for investment solutions and company formation in Morocco',
    siteName: 'IKHWA INVESTMENTS',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'IKHWA INVESTMENTS Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IKHWA INVESTMENTS | Investment Solutions in Morocco',
    description: 'Your trusted partner for investment solutions and company formation in Morocco',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link
          rel="preload"
          href="/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Lato/Lato-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
