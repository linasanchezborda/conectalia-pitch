import { Cloud, Server, Shield, Activity, Database, Lock } from 'lucide-react'

const layers = [
  {
    icon: <Cloud size={28} />,
    title: 'Control Plane (Nube)',
    items: ['Gestión de políticas y configuraciones', 'Catálogo API centralizado', 'Portal de autoservicio'],
    color: 'bg-blue-50 text-blue-600',
    border: 'border-blue-200',
    reqs: ['REQ-11'],
  },
  {
    icon: <Server size={28} />,
    title: 'Data Plane (DMZ)',
    items: ['Gateway de alto rendimiento', 'Procesamiento de tráfico real', 'Sincronización < 30s con Control Plane'],
    color: 'bg-primary-light text-primary-base',
    border: 'border-green-200',
    reqs: ['REQ-11', 'REQ-16'],
  },
  {
    icon: <Shield size={28} />,
    title: 'Seguridad B2B',
    items: ['mTLS servidor-a-servidor', 'OAuth 2.0 + JWT firmados', 'WAF + OWASP API Top 10'],
    color: 'bg-purple-50 text-purple-600',
    border: 'border-purple-200',
    reqs: ['REQ-12', 'REQ-18'],
  },
  {
    icon: <Activity size={28} />,
    title: 'Resiliencia',
    items: ['Circuit Breakers automáticos', 'Throttling dinámico por IP/App', 'Failover multi-zona < 30s'],
    color: 'bg-orange-50 text-orange-600',
    border: 'border-orange-200',
    reqs: ['REQ-14', 'REQ-19'],
  },
  {
    icon: <Database size={28} />,
    title: 'Observabilidad',
    items: ['OpenTelemetry (logs, métricas, trazas)', 'Correlation-ID end-to-end', 'Alertas automáticas p95 > 500ms'],
    color: 'bg-cyan-50 text-cyan-600',
    border: 'border-cyan-200',
    reqs: ['REQ-17'],
  },
  {
    icon: <Lock size={28} />,
    title: 'Auditoría',
    items: ['Registros inmutables 5 años', 'Filtros por consumidor/API/fecha', 'Export CSV/PDF < 60s'],
    color: 'bg-rose-50 text-rose-600',
    border: 'border-rose-200',
    reqs: ['REQ-9'],
  },
]

export default function ArquitecturaSection() {
  return (
    <section id="arquitectura" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary-base rounded-full text-sm font-semibold mb-4">
            Arquitectura
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Diseño de Grado Empresarial
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Separación de planos, seguridad B2B, resiliencia y observabilidad completa.
          </p>
        </div>

        {/* Diagrama de flujo completo */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Flujo Completo de una Petición</h3>
          <p className="text-sm text-gray-700 text-center mb-8">Desde el consumidor hasta los sistemas legados y de vuelta</p>
          <FlowDiagram />
        </div>

        {/* Cards de capacidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((l, i) => (
            <div key={i} className={`bg-white rounded-2xl p-6 border ${l.border} card-hover`}>
              <div className={`w-14 h-14 rounded-xl ${l.color} flex items-center justify-center mb-4`}>
                {l.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{l.title}</h3>
              <ul className="space-y-2 mb-4">
                {l.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-base mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-1 flex-wrap">
                {l.reqs.map(r => (
                  <span key={r} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full font-mono">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Diagrama de flujo SVG completo ── */
function FlowDiagram() {
  return (
    <div className="bg-white rounded-3xl border border-gray-300 p-4 lg:p-6 overflow-x-auto">
      <svg viewBox="0 0 1200 720" className="w-full min-w-[900px]" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <defs>
          <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#009056" />
          </marker>
          <marker id="arrow-gray" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#999" />
          </marker>
          <marker id="arrow-orange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#ea580c" />
          </marker>
          <marker id="arrow-purple" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#7c3aed" />
          </marker>
          <marker id="arrow-cyan" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#0891b2" />
          </marker>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* ═══ ROW 1: Actores ═══ */}
        {/* Consumidor / Aliado */}
        <g filter="url(#shadow)">
          <rect x="20" y="30" width="140" height="80" rx="16" fill="#EEF2FF" stroke="#818CF8" strokeWidth="2" />
          <text x="90" y="60" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4338CA">👤 Consumidor</text>
          <text x="90" y="78" textAnchor="middle" fontSize="9" fill="#6366F1">Aliado / Developer</text>
        </g>
        {/* Agente IA */}
        <g filter="url(#shadow)">
          <rect x="20" y="130" width="140" height="80" rx="16" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="2" />
          <text x="90" y="160" textAnchor="middle" fontSize="11" fontWeight="700" fill="#854D0E">🤖 Agente IA</text>
          <text x="90" y="178" textAnchor="middle" fontSize="9" fill="#A16207">Protocolo MCP</text>
        </g>

        {/* ═══ Flechas actores → CDN ═══ */}
        <line x1="160" y1="70" x2="210" y2="150" stroke="#818CF8" strokeWidth="2" markerEnd="url(#arrow-purple)" />
        <line x1="160" y1="170" x2="210" y2="155" stroke="#CA8A04" strokeWidth="2" markerEnd="url(#arrow-orange)" />

        {/* ═══ CDN + WAF ═══ */}
        <g filter="url(#shadow)">
          <rect x="215" y="120" width="130" height="70" rx="14" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="280" y="148" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1E40AF">CloudFront</text>
          <text x="280" y="165" textAnchor="middle" fontSize="9" fill="#3B82F6">CDN + WAF</text>
        </g>

        {/* CDN → Portal */}
        <line x1="345" y1="155" x2="395" y2="80" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow-green)" />
        {/* CDN → Kong */}
        <line x1="345" y1="155" x2="395" y2="240" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow-green)" />

        {/* ═══ CONTROL PLANE ZONE ═══ */}
        <rect x="385" y="15" width="430" height="310" rx="20" fill="#E5F4EE" fillOpacity="0.4" stroke="#009056" strokeWidth="1.5" strokeDasharray="8 4" />
        <text x="600" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="#009056" letterSpacing="1">CONTROL PLANE — CLOUD AWS</text>

        {/* Portal Angular */}
        <g filter="url(#shadow)">
          <rect x="400" y="50" width="120" height="60" rx="12" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
          <text x="460" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill="#166534">Portal Web</text>
          <text x="460" y="90" textAnchor="middle" fontSize="8" fill="#16A34A">Angular 19+</text>
        </g>

        {/* Portal → BFF */}
        <line x1="520" y1="80" x2="555" y2="80" stroke="#009056" strokeWidth="2" markerEnd="url(#arrow-green)" />

        {/* BFF */}
        <g filter="url(#shadow)">
          <rect x="560" y="50" width="120" height="60" rx="12" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
          <text x="620" y="74" textAnchor="middle" fontSize="10" fontWeight="700" fill="#166534">BFF API</text>
          <text x="620" y="90" textAnchor="middle" fontSize="8" fill="#16A34A">Node.js / Express</text>
        </g>

        {/* BFF → Keycloak */}
        <line x1="680" y1="80" x2="715" y2="80" stroke="#7C3AED" strokeWidth="2" markerEnd="url(#arrow-purple)" />

        {/* Keycloak */}
        <g filter="url(#shadow)">
          <rect x="720" y="50" width="85" height="60" rx="12" fill="#F3E8FF" stroke="#7C3AED" strokeWidth="2" />
          <text x="762" y="72" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5B21B6">Keycloak</text>
          <text x="762" y="86" textAnchor="middle" fontSize="7" fill="#7C3AED">OAuth 2.0 / OIDC</text>
        </g>

        {/* ── Servicios de Dominio ── */}
        <rect x="400" y="125" width="405" height="90" rx="12" fill="white" fillOpacity="0.6" stroke="#009056" strokeWidth="1" strokeDasharray="4 3" />
        <text x="410" y="140" fontSize="8" fontWeight="700" fill="#009056" letterSpacing="0.5">SERVICIOS DE DOMINIO</text>

        {/* Servicios row 1 */}
        <g>
          <rect x="410" y="148" width="90" height="26" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
          <text x="455" y="165" textAnchor="middle" fontSize="8" fontWeight="600" fill="#166534">Catalog</text>
        </g>
        <g>
          <rect x="508" y="148" width="90" height="26" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
          <text x="553" y="165" textAnchor="middle" fontSize="8" fontWeight="600" fill="#166534">Onboarding</text>
        </g>
        <g>
          <rect x="606" y="148" width="90" height="26" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
          <text x="651" y="165" textAnchor="middle" fontSize="8" fontWeight="600" fill="#166534">Analytics</text>
        </g>
        <g>
          <rect x="704" y="148" width="90" height="26" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
          <text x="749" y="165" textAnchor="middle" fontSize="8" fontWeight="600" fill="#166534">Notification</text>
        </g>
        {/* Servicios row 2 */}
        <g>
          <rect x="410" y="182" width="90" height="26" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
          <text x="455" y="199" textAnchor="middle" fontSize="8" fontWeight="600" fill="#166534">Audit</text>
        </g>
        <g>
          <rect x="508" y="182" width="90" height="26" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
          <text x="553" y="199" textAnchor="middle" fontSize="8" fontWeight="600" fill="#166534">Version Gov.</text>
        </g>
        <g>
          <rect x="606" y="182" width="90" height="26" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
          <text x="651" y="199" textAnchor="middle" fontSize="8" fontWeight="600" fill="#166534">SDK Generator</text>
        </g>
        <g>
          <rect x="704" y="182" width="90" height="26" rx="6" fill="#FEF9C3" stroke="#FACC15" strokeWidth="1" />
          <text x="749" y="199" textAnchor="middle" fontSize="8" fontWeight="600" fill="#854D0E">MCP Gateway</text>
        </g>

        {/* ── Persistencia ── */}
        <g filter="url(#shadow)">
          <rect x="410" y="230" width="100" height="50" rx="10" fill="#ECFEFF" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="460" y="252" textAnchor="middle" fontSize="9" fontWeight="700" fill="#155E75">PostgreSQL</text>
          <text x="460" y="266" textAnchor="middle" fontSize="7" fill="#0891B2">15.4+</text>
        </g>
        <g filter="url(#shadow)">
          <rect x="525" y="230" width="100" height="50" rx="10" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
          <text x="575" y="252" textAnchor="middle" fontSize="9" fontWeight="700" fill="#991B1B">Redis</text>
          <text x="575" y="266" textAnchor="middle" fontSize="7" fill="#DC2626">ElastiCache</text>
        </g>
        <g filter="url(#shadow)">
          <rect x="640" y="230" width="100" height="50" rx="10" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.5" />
          <text x="690" y="252" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9A3412">AWS S3</text>
          <text x="690" y="266" textAnchor="middle" fontSize="7" fill="#EA580C">SDKs, Reportes</text>
        </g>

        {/* BFF → Servicios */}
        <line x1="620" y1="110" x2="620" y2="125" stroke="#009056" strokeWidth="1.5" markerEnd="url(#arrow-green)" />

        {/* ═══ DATA PLANE ZONE ═══ */}
        <rect x="385" y="340" width="430" height="130" rx="20" fill="#FFF7ED" fillOpacity="0.4" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="8 4" />
        <text x="600" y="362" textAnchor="middle" fontSize="10" fontWeight="700" fill="#EA580C" letterSpacing="1">DATA PLANE — DMZ</text>

        {/* mTLS sync arrow */}
        <line x1="600" y1="325" x2="600" y2="340" stroke="#009056" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow-green)" />
        <text x="660" y="336" fontSize="7" fill="#009056" fontWeight="600">mTLS Sync &lt; 30s</text>

        {/* Kong AZ-1 */}
        <g filter="url(#shadow)">
          <rect x="400" y="375" width="130" height="55" rx="12" fill="#FFEDD5" stroke="#EA580C" strokeWidth="2" />
          <text x="465" y="398" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9A3412">Kong Gateway</text>
          <text x="465" y="414" textAnchor="middle" fontSize="8" fill="#EA580C">Data Plane AZ-1</text>
        </g>
        {/* Kong AZ-2 */}
        <g filter="url(#shadow)">
          <rect x="400" y="440" width="130" height="22" rx="6" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />
          <text x="465" y="455" textAnchor="middle" fontSize="7" fill="#EA580C">AZ-2 (failover)</text>
        </g>

        {/* Kong → Circuit Breaker */}
        <line x1="530" y1="400" x2="570" y2="400" stroke="#EA580C" strokeWidth="2" markerEnd="url(#arrow-orange)" />

        {/* Circuit Breaker */}
        <g filter="url(#shadow)">
          <rect x="575" y="375" width="110" height="55" rx="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
          <text x="630" y="396" textAnchor="middle" fontSize="9" fontWeight="700" fill="#991B1B">Circuit Breaker</text>
          <text x="630" y="412" textAnchor="middle" fontSize="7" fill="#DC2626">5 err / 60s → open</text>
        </g>

        {/* CB → Adapter */}
        <line x1="685" y1="400" x2="720" y2="400" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow-orange)" />

        {/* Legacy Adapter */}
        <g filter="url(#shadow)">
          <rect x="725" y="375" width="80" height="55" rx="12" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" />
          <text x="765" y="396" textAnchor="middle" fontSize="8" fontWeight="700" fill="#991B1B">Adaptador</text>
          <text x="765" y="410" textAnchor="middle" fontSize="7" fill="#DC2626">SOAP ↔ REST</text>
        </g>

        {/* ═══ SISTEMAS LEGADOS ═══ */}
        <rect x="850" y="340" width="330" height="130" rx="20" fill="#F3F4F6" fillOpacity="0.5" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="8 4" />
        <text x="1015" y="362" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6B7280" letterSpacing="1">SISTEMAS LEGADOS — RED INTERNA</text>

        {/* Adapter → Legados */}
        <line x1="805" y1="400" x2="860" y2="390" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrow-gray)" />
        <line x1="805" y1="400" x2="860" y2="415" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrow-gray)" />
        <line x1="805" y1="400" x2="860" y2="440" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrow-gray)" />

        {/* SOAP services */}
        <g>
          <rect x="865" y="375" width="100" height="30" rx="8" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="1.5" />
          <text x="915" y="394" textAnchor="middle" fontSize="8" fontWeight="600" fill="#6B7280">SOAP Cotización</text>
        </g>
        <g>
          <rect x="975" y="375" width="100" height="30" rx="8" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="1.5" />
          <text x="1025" y="394" textAnchor="middle" fontSize="8" fontWeight="600" fill="#6B7280">SOAP Emisión</text>
        </g>
        <g>
          <rect x="1085" y="375" width="85" height="30" rx="8" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="1.5" />
          <text x="1127" y="394" textAnchor="middle" fontSize="8" fontWeight="600" fill="#6B7280">SOAP Pólizas</text>
        </g>

        {/* ═══ OBSERVABILIDAD (barra inferior) ═══ */}
        <rect x="20" y="510" width="1160" height="90" rx="20" fill="#ECFEFF" fillOpacity="0.4" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="8 4" />
        <text x="100" y="532" fontSize="10" fontWeight="700" fill="#0891B2" letterSpacing="1">OBSERVABILIDAD — OpenTelemetry</text>

        {/* Trazas desde componentes */}
        <line x1="460" y1="110" x2="200" y2="520" stroke="#0891B2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="620" y1="110" x2="400" y2="520" stroke="#0891B2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="465" y1="462" x2="600" y2="520" stroke="#0891B2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="765" y1="430" x2="800" y2="520" stroke="#0891B2" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

        {/* OTel Collector */}
        <g filter="url(#shadow)">
          <rect x="40" y="545" width="130" height="40" rx="10" fill="#CFFAFE" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="105" y="565" textAnchor="middle" fontSize="9" fontWeight="700" fill="#155E75">OTel Collector</text>
          <text x="105" y="578" textAnchor="middle" fontSize="7" fill="#0891B2">Logs + Métricas + Trazas</text>
        </g>
        {/* → */}
        <line x1="170" y1="565" x2="210" y2="565" stroke="#0891B2" strokeWidth="1.5" markerEnd="url(#arrow-cyan)" />
        {/* Grafana */}
        <g filter="url(#shadow)">
          <rect x="215" y="545" width="120" height="40" rx="10" fill="#CFFAFE" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="275" y="565" textAnchor="middle" fontSize="9" fontWeight="700" fill="#155E75">Grafana</text>
          <text x="275" y="578" textAnchor="middle" fontSize="7" fill="#0891B2">+ Prometheus</text>
        </g>
        <line x1="335" y1="565" x2="375" y2="565" stroke="#0891B2" strokeWidth="1.5" markerEnd="url(#arrow-cyan)" />
        {/* CloudWatch */}
        <g filter="url(#shadow)">
          <rect x="380" y="545" width="120" height="40" rx="10" fill="#CFFAFE" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="440" y="565" textAnchor="middle" fontSize="9" fontWeight="700" fill="#155E75">CloudWatch</text>
          <text x="440" y="578" textAnchor="middle" fontSize="7" fill="#0891B2">AWS Logs</text>
        </g>

        {/* Correlation-ID label */}
        <g>
          <rect x="560" y="548" width="200" height="32" rx="8" fill="#009056" fillOpacity="0.1" stroke="#009056" strokeWidth="1" />
          <text x="660" y="562" textAnchor="middle" fontSize="8" fontWeight="700" fill="#009056">X-Correlation-ID</text>
          <text x="660" y="574" textAnchor="middle" fontSize="7" fill="#009056">Trazabilidad end-to-end</text>
        </g>

        {/* Alertas */}
        <g>
          <rect x="800" y="548" width="170" height="32" rx="8" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1" />
          <text x="885" y="562" textAnchor="middle" fontSize="8" fontWeight="700" fill="#991B1B">⚠ Alertas Automáticas</text>
          <text x="885" y="574" textAnchor="middle" fontSize="7" fill="#DC2626">p95 &gt; 500ms → Ops Team</text>
        </g>

        {/* Audit trail */}
        <g>
          <rect x="1010" y="548" width="150" height="32" rx="8" fill="#F3E8FF" stroke="#7C3AED" strokeWidth="1" />
          <text x="1085" y="562" textAnchor="middle" fontSize="8" fontWeight="700" fill="#5B21B6">📋 Audit Trail</text>
          <text x="1085" y="574" textAnchor="middle" fontSize="7" fill="#7C3AED">Inmutable · 5 años</text>
        </g>

        {/* ═══ Leyenda de flujo ═══ */}
        <g>
          <rect x="20" y="625" width="1160" height="80" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1" />
          <text x="600" y="648" textAnchor="middle" fontSize="10" fontWeight="700" fill="#374151">Flujo de la Petición</text>

          {/* Step 1 */}
          <circle cx="80" cy="675" r="12" fill="#EEF2FF" stroke="#818CF8" strokeWidth="1.5" />
          <text x="80" y="679" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4338CA">1</text>
          <text x="105" y="679" fontSize="8" fill="#374151">Consumidor / IA</text>

          {/* Step 2 */}
          <circle cx="230" cy="675" r="12" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="230" y="679" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1E40AF">2</text>
          <text x="255" y="679" fontSize="8" fill="#374151">CDN + WAF</text>

          {/* Step 3 */}
          <circle cx="360" cy="675" r="12" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
          <text x="360" y="679" textAnchor="middle" fontSize="9" fontWeight="700" fill="#166534">3</text>
          <text x="385" y="679" fontSize="8" fill="#374151">Portal → BFF → Auth</text>

          {/* Step 4 */}
          <circle cx="540" cy="675" r="12" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
          <text x="540" y="679" textAnchor="middle" fontSize="9" fontWeight="700" fill="#166534">4</text>
          <text x="565" y="679" fontSize="8" fill="#374151">Microservicios</text>

          {/* Step 5 */}
          <circle cx="690" cy="675" r="12" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1.5" />
          <text x="690" y="679" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9A3412">5</text>
          <text x="715" y="679" fontSize="8" fill="#374151">Kong Gateway (DMZ)</text>

          {/* Step 6 */}
          <circle cx="870" cy="675" r="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
          <text x="870" y="679" textAnchor="middle" fontSize="9" fontWeight="700" fill="#991B1B">6</text>
          <text x="895" y="679" fontSize="8" fill="#374151">Circuit Breaker → Adapter</text>

          {/* Step 7 */}
          <circle cx="1070" cy="675" r="12" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5" />
          <text x="1070" y="679" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6B7280">7</text>
          <text x="1095" y="679" fontSize="8" fill="#374151">SOAP Legacy</text>
        </g>
      </svg>
    </div>
  )
}
