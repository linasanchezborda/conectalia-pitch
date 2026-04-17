export default function LogoBolivar({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield shape */}
      <path
        d="M100 10 L180 50 L180 120 C180 160 140 190 100 195 C60 190 20 160 20 120 L20 50 Z"
        fill="currentColor"
      />
      {/* Inner shield */}
      <path
        d="M100 25 L168 60 L168 118 C168 152 134 178 100 183 C66 178 32 152 32 118 L32 60 Z"
        fill="white"
        fillOpacity="0.15"
      />
      {/* Letter B stylized */}
      <text
        x="100"
        y="135"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        fontSize="110"
        fill="white"
      >
        B
      </text>
    </svg>
  )
}
