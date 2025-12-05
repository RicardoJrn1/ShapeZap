import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import Footer from "../components/footer"
import Header from "../components/header-section"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ShapeZap IA",
  description:
    "ShapeZap IA - A primeira ferramenta de apoio à dieta no WhatsApp que calcula calorias automaticamente com uma simples foto — rápida, prática e acessível.",
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          flex flex-col 
          ${inter.variable} 
          ${montserrat.variable}
        `}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
