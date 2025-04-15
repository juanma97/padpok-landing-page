import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Encuentra tu próximo partido de pádel
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Únete a jugadores cerca de ti y completa partidos sin depender de clubes ni apps complicadas
            </p>
            <div className="mt-8">
              <button className="rounded-md bg-[#1E3A8A] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Quiero jugar ya
              </button>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <Image
              src="/hero-padel.jpg"
              alt="Jugadores de pádel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
} 