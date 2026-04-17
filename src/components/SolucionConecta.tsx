import { Globe, Key, FlaskConical, BarChart3, BookOpen, Bell, Bot } from 'lucide-react'

const features = [
  {
    icon: <Globe size={24} />,
    title: 'Landing Page Pública',
    desc: 'Punto de entrada con propuesta de valor, productos por línea de negocio y ciclo de onboarding visual.',
    req: 'REQ-1',
  },
  {
    icon: <Key size={24} />,
    title: 'Golden Path (Autoservicio)',
    desc: 'Registro → Verificación → App_Cliente → Credenciales Sandbox en minutos, sin intervención manual.',
    req: 'REQ-2',
  },
  {
    icon: <FlaskConical size={24} />,
    title: 'Sandbox Interactivo',
    desc: 'Try-It con datos simulados, historial de peticiones y flujos completos de producto encadenados.',
    req: 'REQ-4',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Consola de Analítica',
    desc: 'Métricas en tiempo real: TPS, latencia p50/p95/p99, tasa de error y alertas de cuota al 80%.',
    req: 'REQ-5',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Documentación Evolucionada',
    desc: 'Guías, snippets en 4 lenguajes y SDKs auto-generados desde OpenAPI.',
    req: 'REQ-6',
  },
  {
    icon: <Bell size={24} />,
    title: 'Notificaciones de Ciclo de Vida',
    desc: 'Alertas proactivas de sunset, nuevas versiones y mantenimiento por email y portal.',
    req: 'REQ-7',
  },
  {
    icon: <Bot size={24} />,
    title: 'Agent Experience (IA)',
    desc: 'APIs enriquecidas semánticamente y consumibles por agentes de IA bajo protocolo MCP.',
    req: 'REQ-15',
  },
]

export default function SolucionConecta() {
  return (
    <section id="solucion" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary-base rounded-full text-sm font-semibold mb-4">
            La Solución
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Ecosistema <span className="text-gradient">ConectaL</span><span className="text-secondary-base font-black">IA</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Una plataforma abierta que reduce el time-to-market y prepara la infraestructura para el consumo por agentes de IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 border border-gray-300 card-hover overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary-base flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                    <span className="text-xs px-2 py-0.5 bg-primary-light text-primary-base rounded-full font-mono">
                      {f.req}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
