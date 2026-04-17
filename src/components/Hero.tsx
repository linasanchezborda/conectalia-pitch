import { ArrowRight, Globe, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-sm mb-8 animate-fade-in-up">
              <img src="/logo-seguros-bolivar.png" alt="Seguros Bolívar" className="h-10 w-auto rounded" />
              Open Insurance · Seguros Bolívar
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up delay-100">
              ConectaL<span className="text-secondary-base">IA</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-200">
              El ecosistema de autoservicio que centraliza, expone y gobierna el consumo de activos digitales de Seguros Bolívar para terceros.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a href="#solucion" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-base text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-all hover:scale-105">
                Explorar Solución <ArrowRight size={18} />
              </a>
              <a href="#requerimientos" className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/20 transition-all">
                Ver Requerimientos
              </a>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in delay-400">
            <div className="space-y-4">
              <StatCard icon={<Globe size={24} />} value="1,500+" label="TPS Soportados" />
              <StatCard icon={<Shield size={24} />} value="99.95%" label="SLA Disponibilidad" />
            </div>
            <div className="space-y-4 mt-8">
              <StatCard icon={<Zap size={24} />} value="<30ms" label="Latencia Gateway" />
              <StatCard icon={<ArrowRight size={24} />} value="19" label="Requerimientos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-6 card-hover">
      <div className="text-secondary-base mb-3">{icon}</div>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  )
}
