import { useEffect, useRef, useState } from "react";
import { GraduationCap, Baby, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: 200, suffix: "+", label: "Girls Reintegrated into Education" },
  { icon: Baby, value: 45, suffix: "", label: "Healthy Babies in Our Daycare" },
  { icon: Heart, value: 100, suffix: "%", label: "Access to Trauma Counseling" },
  { icon: MapPin, value: 12, suffix: "", label: "Counties Reached through Advocacy" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ImpactStats = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
        Our Impact
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Real numbers. Real lives changed.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <stat.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-3xl sm:text-4xl font-bold text-foreground font-display">
              <Counter target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm text-muted-foreground leading-snug">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStats;
