"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0A4958] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            IslamicMatch
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link href="/community" className="hover:text-white/80 transition-colors">
              Community
            </Link>
            <Link href="/support" className="hover:text-white/80 transition-colors">
              Support
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block py-2 px-4 hover:bg-[#0A4958]/80" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/community" className="block py-2 px-4 hover:bg-[#0A4958]/80" onClick={() => setIsOpen(false)}>
            Community
          </Link>
          <Link href="/support" className="block py-2 px-4 hover:bg-[#0A4958]/80" onClick={() => setIsOpen(false)}>
            Support
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

