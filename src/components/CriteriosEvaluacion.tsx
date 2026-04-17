import { useState } from 'react'
import { Bot, Users, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react'

interface Criterio {
  nombre: string
  puntos: number
  items: { titulo: string; respuesta: string }[]
}

const kiroEval: Criterio[] = [
  {
    nombre: 'Calidad de la Especificación',
    puntos: 5,
    items: [
      {
        titulo: 'Claridad y Completitud',
        respuesta: '19 user stories con formato estándar "Como [rol], quiero [acción], para [beneficio]". Cada una con criterios SHALL/WHEN/IF verificables.',
      },
      {
        titulo: 'Criterios de Aceptación',
        respuesta: 'Criterios específicos y medibles: tiempos de respuesta (< 5s, < 30s, < 60s), umbrales (80% cuota, 5 errores/60s), períodos (3 meses sunset, 72h mantenimiento).',
      },
      {
        titulo: 'Documentación Técnica',
        respuesta: 'SDD documenta: separación Control/Data Plane, mTLS + OAuth 2.0, Circuit Breakers, OpenTelemetry, adaptadores SOAP→REST.',
      },
    ],
  },
  {
    nombre: 'Uso Efectivo de Kiro (Spec-Driven)',
    puntos: 5,
    items: [
      {
        titulo: 'Herramienta Central',
        respuesta: 'Kiro fue el eje para especificar los 19 requerimientos, generar el diseño técnico y guiar la implementación del código.',
      },
      {
        titulo: 'Flujo de Trabajo',
        respuesta: 'Flujo real: Spec (requirements.md) → Diseño (SDD con arquitectura) → Código (implementación alineada). Sin código improvisado.',
      },
      {
        titulo: 'Trazabilidad',
        respuesta: 'Cada componente del código mapea a un REQ específico. Las decisiones de implementación son comprobables desde la spec.',
      },
    ],
  },
  {
    nombre: 'Prototipo Funcional - Calidad de Código',
    puntos: 5,
    items: [
      {
        titulo: 'Arquitectura de Software',
        respuesta: 'Código limpio con separación de capas (features/, core/, shared/), standalone components, lazy loading, tokens de diseño corporativos.',
      },
      {
        titulo: 'Alineación Spec ↔ Código',
        respuesta: 'El código implementa exactamente lo descrito: Landing Page (REQ-1), Golden Path (REQ-2), Catálogo (REQ-3), Sandbox (REQ-4), Analítica (REQ-5).',
      },
    ],
  },
]

const juradoEval: Criterio[] = [
  {
    nombre: 'Relevancia para el Negocio',
    puntos: 10,
    items: [
      {
        titulo: 'Solución de Problema',
        respuesta: 'Resuelve la necesidad real de Open Insurance en Colombia: autoservicio para aliados, reducción de time-to-market y preparación para IA.',
      },
      {
        titulo: 'Impacto Potencial',
        respuesta: 'Reducción de semanas a minutos en onboarding, 1,500+ TPS, 99.95% SLA, soporte para agentes de IA bajo MCP.',
      },
      {
        titulo: 'Contexto Local',
        respuesta: 'Cumple Habeas Data (5 años retención), segmentos colombianos (Fintechs, E-commerce, Retail, Bancos), regulación del sector asegurador.',
      },
    ],
  },
  {
    nombre: 'Demostración en Vivo',
    puntos: 10,
    items: [
      {
        titulo: 'Funcionalidad',
        respuesta: 'Prototipo funcional con Landing Page, flujo de onboarding, catálogo de APIs, sandbox interactivo y consola de analítica.',
      },
      {
        titulo: 'Estabilidad',
        respuesta: 'Aplicación ejecutable y demostrable sin errores críticos, con manejo de estados de carga, error y datos vacíos.',
      },
      {
        titulo: 'UX/UI',
        respuesta: 'Interfaz intuitiva usando Design System de Seguros Bolívar (@seguros-bolivar/ui-bundle), responsive y accesible WCAG 2.1 AA.',
      },
    ],
  },
  {
    nombre: 'Presentación y Colaboración',
    puntos: 5,
    items: [
      {
        titulo: 'Pitch',
        respuesta: 'Presentación clara del problema → solución → impacto en 5 minutos, con demo en vivo del prototipo funcional.',
      },
      {
        titulo: 'Sinergia del Equipo',
        respuesta: 'Colaboración real usando Kiro como herramienta central, con roles definidos y contribuciones equilibradas.',
      },
      {
        titulo: 'Defensa de la Idea',
        respuesta: 'Solidez técnica (arquitectura enterprise-grade) y de negocio (Open Insurance, reducción de costos, Agent Experience).',
      },
    ],
  },
]

export default function CriteriosEvaluacion() {
  return (
    <section id="criterios" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary-base rounded-full text-sm font-semibold mb-4">
            Evaluación
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Criterios de Evaluación
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cómo ConectalIA responde a cada criterio evaluado por el Agente Kiro y los Jurados.
          </p>
        </div>

        {/* Score summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ScoreCard icon={<Bot size={24} />} label="Agente Kiro" score={15} total={15} color="bg-primary-base" />
          <ScoreCard icon={<Users size={24} />} label="Jurados" score={25} total={25} color="bg-primary-dark" />
          <ScoreCard icon={<CheckCircle2 size={24} />} label="Total" score={40} total={40} color="bg-gradient-primary" />
        </div>

        {/* Kiro evaluation */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary-base text-white flex items-center justify-center">
              <Bot size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Evaluación Agente Kiro (15 pts)</h3>
          </div>
          <div className="space-y-4">
            {kiroEval.map((c, i) => (
              <CriterioCard key={i} criterio={c} />
            ))}
          </div>
        </div>

        {/* Jurado evaluation */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary-dark text-white flex items-center justify-center">
              <Users size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Evaluación Jurados (25 pts)</h3>
          </div>
          <div className="space-y-4">
            {juradoEval.map((c, i) => (
              <CriterioCard key={i} criterio={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ScoreCard({ icon, label, score, total, color }: { icon: React.ReactNode; label: string; score: number; total: number; color: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-300 card-hover text-center">
      <div className={`w-12 h-12 rounded-xl ${color} text-white flex items-center justify-center mx-auto mb-3`}>
        {icon}
      </div>
      <div className="text-3xl font-black text-gray-900">{score}<span className="text-lg text-gray-700">/{total}</span></div>
      <div className="text-sm text-gray-700 mt-1">{label}</div>
    </div>
  )
}

function CriterioCard({ criterio }: { criterio: Criterio }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-gray-300 overflow-hidden card-hover">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-black text-primary-base">{criterio.puntos}</span>
          <div>
            <h4 className="text-lg font-bold text-gray-900">{criterio.nombre}</h4>
            <p className="text-sm text-gray-700">{criterio.items.length} sub-criterios evaluados</p>
          </div>
        </div>
        {open ? <ChevronUp size={20} className="text-gray-700" /> : <ChevronDown size={20} className="text-gray-700" />}
      </button>

      {open && (
        <div className="px-6 pb-6 space-y-4 border-t border-gray-300 pt-4 animate-fade-in">
          {criterio.items.map((item, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle2 size={18} className="text-primary-base mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.titulo}</div>
                <div className="text-sm text-gray-700 mt-1">{item.respuesta}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
