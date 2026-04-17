export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-seguros-bolivar.png" alt="Seguros Bolívar" className="h-10 w-auto rounded" />
            <span className="font-bold">ConectaL<span className="text-secondary-base">IA</span></span>
            <span className="text-gray-700 text-sm">|</span>
            <span className="text-gray-700 text-sm">Seguros Bolívar</span>
          </div>
          <div className="text-sm text-gray-700">
            Desarrollado con Kiro · Spec-Driven Development · 2025
          </div>
        </div>
      </div>
    </footer>
  )
}
