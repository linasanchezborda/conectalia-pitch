import { TrendingUp, Clock, DollarSign, Users, Cpu, ShieldCheck } from 'lucide-react'

const impactos = [
  {
    icon: <Clock size={28} />,
    metric: 'Semanas → Minutos',
    title: 'Time-to-Market',
    desc: 'Onboarding de autoservicio: registro, credenciales y primera llamada API sin intervención manual.',
  },
  {
    icon: <DollarSign size={28} />,
    metric: '-70%',
    title: 'Costos de Integración',
    desc: 'Eliminación de procesos manuales, documentación auto-generada y SDKs automáticos.',
  },
  {
    icon: <Users size={28} />,
    metric: '5 Segmentos',
    title: 'Mercado Objetivo',
    desc: 'Fintechs, E-commerce, Marketplace, Retail y Bancos con proposiciones de valor específicas.',
  },
  {
    icon: <Cpu size={28} />,
    metric: 'MCP Ready',
    title: 'Agent Experience',
    desc: 'Primera plataforma de seguros en Colombia preparada para consumo por agentes de IA.',
  },
  {
    icon: <ShieldCheck size={28} />,
    metric: 'Habeas Data',
    title: 'Cumplimiento Regulatorio',
    desc: 'Auditoría inmutable 5 años, OWASP API Top 10, mTLS + OAuth 2.0, enmascaramiento de datos.',
  },
  {
    icon: <TrendingUp size={28} />,
    metric: '99.95% SLA',
    title: 'Disponibilidad Enterprise',
    desc: '1,500+ TPS, multi-zona, failover < 30s, escalamiento elástico automático.',
  },
]

export default function ImpactoNegocio() {
  return (
    <section id="impacto" className="py-24 bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-semibold mb-4 text-white/90">
            Resultados
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Impacto en el Negocio
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            ConectaLIA transforma la forma en que Seguros Bolívar se conecta con su ecosistema de aliados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactos.map((imp, i) => (
            <div key={i} className="glass rounded-2xl p-6 card-hover">
              <div className="text-secondary-base mb-4">{imp.icon}</div>
              <div className="text-2xl font-black text-secondary-base mb-1">{imp.metric}</div>
              <h3 className="text-lg font-bold text-white mb-2">{imp.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{imp.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-black mb-4">Open Insurance para Colombia</h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              ConectaLIA posiciona a Seguros Bolívar como líder en la apertura del ecosistema asegurador colombiano, con tecnología de clase mundial y preparación para la era de la IA.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-base text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-all hover:scale-105"
            >
              Volver al Inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
