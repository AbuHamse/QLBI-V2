import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Islamic Marriage Site",
  description: "Find your perfect match with our Islamic marriage platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A4958]/5`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-emerald-800 text-white py-4 text-center">
          <p>&copy; 2023 Islamic Marriage Site. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

