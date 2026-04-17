import { useState } from 'react'
import {
  Globe, Key, Search, FlaskConical, BarChart3, BookOpen, Bell,
  Users, FileSearch, GitBranch, Cloud, Shield, Layers, Activity,
  Bot, Server, Eye, Lock, Gauge
} from 'lucide-react'

const reqs = [
  { id: 1, icon: <Globe size={18} />, title: 'Landing Page Pública', cat: 'Portal', color: 'bg-blue-500' },
  { id: 2, icon: <Key size={18} />, title: 'Onboarding Golden Path', cat: 'Portal', color: 'bg-blue-500' },
  { id: 3, icon: <Search size={18} />, title: 'Catálogo Inteligente', cat: 'Portal', color: 'bg-blue-500' },
  { id: 4, icon: <FlaskConical size={18} />, title: 'Sandbox Interactivo', cat: 'Portal', color: 'bg-blue-500' },
  { id: 5, icon: <BarChart3 size={18} />, title: 'Consola de Analítica', cat: 'Portal', color: 'bg-blue-500' },
  { id: 6, icon: <BookOpen size={18} />, title: 'Documentación y SDKs', cat: 'Portal', color: 'bg-blue-500' },
  { id: 7, icon: <Bell size={18} />, title: 'Notificaciones Ciclo de Vida', cat: 'Portal', color: 'bg-blue-500' },
  { id: 8, icon: <Users size={18} />, title: 'Gestión de Aliados', cat: 'Admin', color: 'bg-purple-500' },
  { id: 9, icon: <FileSearch size={18} />, title: 'Auditoría y Cumplimiento', cat: 'Admin', color: 'bg-purple-500' },
  { id: 10, icon: <GitBranch size={18} />, title: 'Gobierno de Versiones', cat: 'Admin', color: 'bg-purple-500' },
  { id: 11, icon: <Cloud size={18} />, title: 'Control Plane vs Data Plane', cat: 'Infra', color: 'bg-orange-500' },
  { id: 12, icon: <Shield size={18} />, title: 'Seguridad B2B (mTLS + OAuth)', cat: 'Infra', color: 'bg-orange-500' },
  { id: 13, icon: <Layers size={18} />, title: 'Adaptador Legacy SOAP→REST', cat: 'Infra', color: 'bg-orange-500' },
  { id: 14, icon: <Activity size={18} />, title: 'Circuit Breakers', cat: 'Infra', color: 'bg-orange-500' },
  { id: 15, icon: <Bot size={18} />, title: 'Agent Experience (IA/MCP)', cat: 'Infra', color: 'bg-orange-500' },
  { id: 16, icon: <Server size={18} />, title: 'Disponibilidad 99.95%', cat: 'NFR', color: 'bg-red-500' },
  { id: 17, icon: <Eye size={18} />, title: 'Observabilidad OpenTelemetry', cat: 'NFR', color: 'bg-red-500' },
  { id: 18, icon: <Lock size={18} />, title: 'OWASP API Security', cat: 'NFR', color: 'bg-red-500' },
  { id: 19, icon: <Gauge size={18} />, title: 'Rendimiento Gateway <30ms', cat: 'NFR', color: 'bg-red-500' },
]

const categories = ['Todos', 'Portal', 'Admin', 'Infra', 'NFR']

export default function Requerimientos() {
  const [filter, setFilter] = useState('Todos')

  const filtered = filter === 'Todos' ? reqs : reqs.filter(r => r.cat === filter)

  return (
    <section id="requerimientos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary-base rounded-full text-sm font-semibold mb-4">
            Alcance
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            19 Requerimientos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cobertura completa: portal de consumidor, administración, infraestructura y requerimientos no funcionales.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary-base text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-base hover:text-primary-base'
              }`}
            >
              {cat} {cat !== 'Todos' && <span className="ml-1 opacity-70">({reqs.filter(r => r.cat === cat).length})</span>}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(r => (
            <div
              key={r.id}
              className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-300 card-hover"
            >
              <div className={`w-10 h-10 rounded-lg ${r.color} text-white flex items-center justify-center flex-shrink-0`}>
                {r.icon}
              </div>
              <div>
                <span className="text-xs font-mono text-gray-700">REQ-{r.id}</span>
                <div className="text-sm font-semibold text-gray-900">{r.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
