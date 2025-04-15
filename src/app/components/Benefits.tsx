import { UserGroupIcon, PaperAirplaneIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Crea o únete a partidos',
    description: 'Elige nivel, zona y hora',
    icon: UserGroupIcon,
  },
  {
    name: 'Conecta por Telegram',
    description: 'Al completar el partido, te unimos con los jugadores',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Ranking y progreso',
    description: 'Sigue tu evolución y repite con amigos',
    icon: ChartBarIcon,
  },
]

export default function Benefits() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para jugar al pádel
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-5 w-5 flex-none text-blue-800" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 