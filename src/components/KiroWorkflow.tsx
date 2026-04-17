import { FileText, PenTool, Code, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: <FileText size={28} />,
    phase: 'Fase 1',
    title: 'Especificación',
    desc: 'User stories claras, completas y verificables con criterios de aceptación específicos y medibles.',
    detail: '19 requerimientos documentados con criterios SHALL/WHEN/IF precisos.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <PenTool size={28} />,
    phase: 'Fase 2',
    title: 'Diseño Técnico',
    desc: 'Decisiones de arquitectura documentadas: separación de planos, seguridad, resiliencia.',
    detail: 'SDD con diagramas, dependencias y restricciones técnicas.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <Code size={28} />,
    phase: 'Fase 3',
    title: 'Implementación',
    desc: 'Código limpio, organizado y alineado con las especificaciones. Stack corporativo de Seguros Bolívar.',
    detail: 'React + Vite + Tailwind + Node.js + Express + PostgreSQL.',
    color: 'from-primary-base to-primary-dark',
  },
  {
    icon: <CheckCircle size={28} />,
    phase: 'Fase 4',
    title: 'Validación',
    desc: 'Tests unitarios, cobertura >80%, sin code smells críticos. Alineación spec ↔ código.',
    detail: 'Vitest + React Testing Library + Jest + Supertest.',
    color: 'from-emerald-500 to-emerald-600',
  },
]

export default function KiroWorkflow() {
  return (
    <section id="kiro" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary-base rounded-full text-sm font-semibold mb-4">
            Metodología
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Spec-Driven Development con <span className="text-gradient">Kiro</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kiro como eje central del desarrollo: desde la especificación hasta el código validado, con trazabilidad completa.
          </p>
        </div>

        {/* Flow visual */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl p-6 border border-gray-300 card-hover h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-4`}>
                  {s.icon}
                </div>
                <span className="text-xs font-bold text-primary-base uppercase tracking-wider">{s.phase}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{s.desc}</p>
                <p className="text-xs text-gray-700 bg-gray-100 rounded-lg p-3 font-mono">{s.detail}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight size={20} className="text-primary-base" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Kiro benefits */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-secondary-base mb-2">100%</div>
              <div className="text-white/90 text-sm">Trazabilidad Spec → Código</div>
              <p className="text-white/60 text-xs mt-2">Cada línea de código responde a un criterio de aceptación documentado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary-base mb-2">19</div>
              <div className="text-white/90 text-sm">Requerimientos Especificados</div>
              <p className="text-white/60 text-xs mt-2">User stories con criterios SHALL/WHEN/IF verificables</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary-base mb-2">Cero</div>
              <div className="text-white/90 text-sm">Código Improvisado</div>
              <p className="text-white/60 text-xs mt-2">Todo el desarrollo sigue el flujo spec → diseño → código</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
