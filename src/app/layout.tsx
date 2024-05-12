import { Toaster } from "@/components/ui/toaster"
import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Baudy Training",
  description:
    "Mathys Baudy, coach sportif et diététicien-nutritionniste à Lyon",
}

export const viewport: Viewport = {
  themeColor: "hsl(222.2 84% 4.9%)",
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
