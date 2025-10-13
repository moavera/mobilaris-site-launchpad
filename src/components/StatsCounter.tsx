import { useEffect, useState } from "react";

export const StatsCounter = () => {
  const [count, setCount] = useState(24500);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const increment = Math.floor(Math.random() * 3) + 1;
        return prev + increment;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-primary/10 backdrop-blur-sm border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up">
          <div className="mb-4">
            <span className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {count.toLocaleString()}
            </span>
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            gas cylinders made safe by Site™
          </p>
          <p className="text-muted-foreground mt-2">and counting...</p>
        </div>
      </div>
    </section>
  );
};
