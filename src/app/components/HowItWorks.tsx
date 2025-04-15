import { UserCircleIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Paso 1: Rellena tu perfil',
    description: 'Crea tu perfil con tu nivel y preferencias de juego',
    icon: UserCircleIcon,
  },
  {
    name: 'Paso 2: Únete o crea un partido',
    description: 'Encuentra partidos disponibles o crea uno nuevo',
    icon: UserGroupIcon,
  },
  {
    name: 'Paso 3: Juega y gana puntos',
    description: 'Disfruta del partido y acumula puntos para el ranking',
    icon: TrophyIcon,
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Cómo funciona?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empieza a jugar al pádel en tres sencillos pasos
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {steps.map((step) => (
              <div key={step.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-800">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 