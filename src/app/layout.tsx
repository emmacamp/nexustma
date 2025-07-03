import "@/app/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import Chatwoot from "@/components/chatwoot";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexustma.com"),
  title: {
    default: "Nexus TMA - Automatización Inteligente",
    template: "%s | Nexus TMA",
  },
  description:
    "Soluciones de automatización impulsadas por IA para transformar su negocio",
  keywords:
    "automatización, IA, inteligencia artificial, transformación digital, soluciones empresariales, automatización de procesos, IA para negocios, automatización empresarial, IA en negocios, automatización de operaciones, IA para empresas, automatización de operaciones empresariales, IA para empresas, automatización de operaciones empresariales, IA para empresas",
  authors: [{ name: "Nexus TMA" }],
  creator: "Nexus TMA",
  publisher: "Nexus TMA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nexus TMA - Automatización Inteligente",
    description:
      "Soluciones de automatización impulsadas por IA para transformar su negocio",
    url: "https://www.nexustma.com",
    siteName: "Nexus TMA",
    locale: "es_DO",
    type: "website",
    images: ["/favicon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus TMA - Automatización Inteligente",
    description:
      "Soluciones de automatización impulsadas por IA para transformar su negocio",
    images: ["/favicon.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MainNav />
          {children}
          <Footer />
          <Chatwoot />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
