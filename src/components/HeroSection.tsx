import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const slides = [
  {
    image: heroImage,
    title: "Education is the Path to Healing.",
    subtitle: "Supporting teen mothers and survivors of GBV/FGM to complete their journey — with dignity, care, and hope.",
  },
  {
    image: heroImage,
    title: "Every Girl Deserves a Second Chance.",
    subtitle: "We provide a safe space for learning, healing, and growing — because no dream should be abandoned.",
  },
  {
    image: heroImage,
    title: "Building Futures, One Student at a Time.",
    subtitle: "From trauma counseling to vocational training, we equip our students with the tools to thrive.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          width={1920}
          height={1080}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h1
          key={current}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in"
        >
          {slide.title}
        </h1>
        <p
          key={`sub-${current}`}
          className="text-lg sm:text-xl text-primary-foreground/85 mb-10 font-sans leading-relaxed max-w-2xl mx-auto animate-fade-in"
        >
          {slide.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#admissions"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-base"
          >
            Apply for Admission
          </a>
          <a
            href="#involved"
            className="px-8 py-3.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-base"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-foreground/30 hover:bg-foreground/50 flex items-center justify-center transition-colors text-primary-foreground"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-foreground/30 hover:bg-foreground/50 flex items-center justify-center transition-colors text-primary-foreground"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
