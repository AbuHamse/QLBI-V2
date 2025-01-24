import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#0A4958] mb-4">Welcome to IslamicMatch</h1>
        <p className="text-xl text-[#0A4958]">Find your perfect match with our Islamic marriage platform</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-[#0A4958] mb-4">Why Choose IslamicMatch?</h2>
          <ul className="list-disc list-inside space-y-2 text-[#0A4958]">
            <li>Halal and Shariah-compliant matching process</li>
            <li>Verified profiles to ensure authenticity</li>
            <li>Privacy-focused platform</li>
            <li>Guidance from Islamic scholars</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Muslim couple"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-[#0A4958] mb-4">Ready to Find Your Soulmate?</h2>
        <Link
          href="/community"
          className="inline-block bg-[#0A4958] text-white px-6 py-3 rounded-full hover:bg-[#0A4958]/80 transition-colors"
        >
          Join Our Community
        </Link>
      </section>
    </div>
  )
}

