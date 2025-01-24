"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Support() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#0A4958] mb-4">Support</h1>
        <p className="text-xl text-[#0A4958]">We're here to help you on your journey to finding a spouse</p>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#0A4958] mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#0A4958] mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-[#0A4958]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A4958]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#0A4958] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-[#0A4958]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A4958]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[#0A4958] mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 border border-[#0A4958]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A4958]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#0A4958] text-white px-6 py-3 rounded-full hover:bg-[#0A4958]/80 transition-colors flex items-center justify-center"
          >
            <Send size={18} className="mr-2" />
            Send Message
          </button>
        </form>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-[#0A4958] mb-4">FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold text-[#0A4958] cursor-pointer">
              How does the matching process work?
            </summary>
            <p className="mt-2 text-[#0A4958]">
              Our matching process is based on Islamic principles and uses advanced algorithms to suggest compatible
              matches based on your preferences, values, and lifestyle.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold text-[#0A4958] cursor-pointer">Is my information kept private?</summary>
            <p className="mt-2 text-[#0A4958]">
              Yes, we take your privacy very seriously. Your personal information is kept confidential and is only
              shared with potential matches with your explicit consent.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold text-[#0A4958] cursor-pointer">
              Can I get guidance from Islamic scholars?
            </summary>
            <p className="mt-2 text-[#0A4958]">
              We have a panel of respected Islamic scholars who can provide guidance on matters related to marriage and
              relationships in accordance with Islamic principles.
            </p>
          </details>
        </div>
      </section>
    </div>
  )
}

