import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import localFont from "next/font/local";
import { SITE_URL } from "@/config";
import { RouteGate } from "@/components/providers/RouteGate";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const nohemi = localFont({
  src: [
    {
      path: "../../public/fonts/Nohemi-Regular-BF6438cc4d0e493.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-SemiBold-BF6438cc588a48a.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Nohemi-Bold-BF6438cc587b5b5.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  // El nombre de la variable no puede ser --font-nohemi: Tailwind ya define una
  // utilidad `font-nohemi` con ese nombre y la referencia quedaría circular.
  // Ver la nota de @theme inline en globals.css.
  variable: "--nohemi",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rumbo Latam",
    template: "%s | Rumbo Latam",
  },
  description:
    "Rumbo Latam: guía de viaje por los rincones imperdibles de América Latina. Países, destinos y planes para tu próxima ruta.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    siteName: "Rumbo Latam",
    locale: "es_VE",
    type: "website",
    title: "Rumbo Latam",
    description:
      "Rumbo Latam: guía de viaje por los rincones imperdibles de América Latina.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${albertSans.variable} ${nohemi.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <RouteGate />
      </body>
    </html>
  );
}
