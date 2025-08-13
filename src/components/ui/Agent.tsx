interface AgentProps {
  id: number;
  name: string;
  power: string;
  imageSrc: string;
  delay?: string;
  isHero?: boolean;
}

export default function Agent({
  name,
  power,
  imageSrc,
  delay = "",
  isHero = false,
}: AgentProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 floating ${delay} ${
        isHero ? "lg:scale-110 mb-16" : ""
      }`}
    >
      <div className={`${isHero ? "w-32 h-32" : "w-24 h-24"} relative`}>
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-contain rounded-lg shadow-lg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-lg pointer-events-none" />
      </div>

      <h3 className={`${isHero ? "text-2xl" : "text-xl"} font-bold text-white`}>
        {name}
      </h3>

      <p className="mt-2 text-gray-400 text-center">{power}</p>
    </div>
  );
}
