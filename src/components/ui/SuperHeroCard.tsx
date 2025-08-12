interface SuperHeroCardProps {
  name: string;
  power: string;
  color: string;
  className?: string;
}

export default function SuperHeroCard({
  name,
  power,
  color,
  className = "",
}: SuperHeroCardProps) {
  const lightColor = color + "40";
  const darkColor = color.replace("#", "").toLowerCase();

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 ${className}`}
    >
      <svg
        className="w-[100px] h-[100px]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Corpo do super-herói */}
        <rect x="30" y="30" width="40" height="40" rx="10" fill={color} />

        {/* Cabeça */}
        <circle cx="50" cy="25" r="15" fill={`${color}40`} />

        {/* Corpo/Pernas */}
        <path
          d="M50 40 L60 80 L50 70 L40 80 Z"
          fill={color.replace(/[0-9A-F]{2}$/i, "80")}
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Capa direita */}
        <path
          d="M50 40 L50 65 C55 70 60 65 60 60 L60 40 Z"
          fill={`${color}60`}
          className="waving-cape-right"
          style={{ transformOrigin: "50px 40px" }}
        />

        {/* Capa esquerda */}
        <path
          d="M50 40 L50 65 C45 70 40 65 40 60 L40 40 Z"
          fill={`${color}60`}
          className="waving-cape-left"
          style={{ transformOrigin: "50px 40px" }}
        />
      </svg>

      <h3 className="text-xl font-bold text-white text-center">{name}</h3>
      <p className="mt-2 text-gray-400 text-center">Super-poder: {power}</p>
    </div>
  );
}
