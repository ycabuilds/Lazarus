import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  borderRadius: string;
}

const EmberParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.3 + 0.1,
      borderRadius: Math.random() > 0.5 ? "50%" : "20%",
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-gradient-ember"
          style={{
            left: `${p.left}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            borderRadius: p.borderRadius,
            animation: `float-up ${p.duration}s ease-in ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default EmberParticles;
