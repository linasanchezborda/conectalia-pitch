import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'problema', label: 'Problema' },
  { id: 'solucion', label: 'Solución' },
  { id: 'arquitectura', label: 'Arquitectura' },
  { id: 'kiro', label: 'Kiro Workflow' },
  { id: 'requerimientos', label: 'Requerimientos' },
  { id: 'impacto', label: 'Impacto' },
]

interface Props {
  active: string
  onNavigate: (id: string) => void
}

export default function Navbar({ active, onNavigate }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id: string) => {
    onNavigate(id)
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/logo-seguros-bolivar.png" alt="Seguros Bolívar" className="h-10 w-auto rounded" />
            <span className={`font-bold text-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              ConectaL<span className="text-secondary-base">IA</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  active === link.id
                    ? 'bg-primary-base text-white'
                    : scrolled
                      ? 'text-gray-700 hover:bg-primary-light hover:text-primary-base'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen
              ? <X className={scrolled ? 'text-gray-900' : 'text-white'} />
              : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-300 animate-fade-in">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="block w-full text-left px-6 py-3 text-sm text-gray-900 hover:bg-primary-light hover:text-primary-base transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
