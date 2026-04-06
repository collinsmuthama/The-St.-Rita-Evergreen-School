import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This school gave me a second chance at being a mother and a student. I never thought both were possible.",
    name: "Grace M.",
    year: "Class of 2023",
  },
  {
    quote: "I arrived broken, but the counselors and teachers helped me believe in myself again. I passed my KCSE with flying colors.",
    name: "Faith W.",
    year: "Class of 2022",
  },
  {
    quote: "My baby goes to their daycare while I study. It's a blessing I never expected to find.",
    name: "Amina K.",
    year: "Current Student",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-14">
          Voices of Hope
        </h2>
        <div className="relative bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border">
          <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
          <div className="text-center">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed italic mb-6 font-display">
              "{t.quote}"
            </p>
            <p className="text-sm font-semibold text-primary">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.year}</p>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
