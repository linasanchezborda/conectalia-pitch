import { AlertTriangle, TrendingUp, Clock, Users } from 'lucide-react'

const problemas = [
  {
    icon: <Clock size={28} />,
    title: 'Time-to-Market Lento',
    desc: 'Integraciones manuales que toman semanas. Los aliados dependen de equipos internos para cada paso.',
  },
  {
    icon: <AlertTriangle size={28} />,
    title: 'Repositorio Estático',
    desc: 'Documentación desactualizada, sin interactividad ni sandbox para pruebas en tiempo real.',
  },
  {
    icon: <Users size={28} />,
    title: 'Sin Autoservicio',
    desc: 'Los consumidores no pueden registrarse, crear apps ni obtener credenciales sin intervención manual.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Sin Preparación para IA',
    desc: 'Las APIs no están enriquecidas semánticamente ni son consumibles por agentes de IA bajo MCP.',
  },
]

export default function ProblemaOportunidad() {
  return (
    <section id="problema" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            El Problema
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ¿Por qué ConectaL<span className="text-secondary-base">IA</span>?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            El portal actual limita la velocidad de integración y no escala para el ecosistema Open Insurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemas.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-300 card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
