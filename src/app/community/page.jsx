import Image from "next/image"

export default function Community() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#0A4958] mb-4">Our Community</h1>
        <p className="text-xl text-[#0A4958]">Connect with like-minded individuals on their journey to find a spouse</p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={`/placeholder.svg?height=200&width=300&text=Member ${i}`}
                alt={`Community Member ${i}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#0A4958] mb-2">Member {i}</h3>
              <p className="text-[#0A4958]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-[#0A4958] mb-4">Join Our Growing Community</h2>
        <button className="bg-[#0A4958] text-white px-6 py-3 rounded-full hover:bg-[#0A4958]/80 transition-colors">
          Create Your Profile
        </button>
      </section>
    </div>
  )
}

