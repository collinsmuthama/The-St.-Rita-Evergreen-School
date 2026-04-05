import heroImage from "@/assets/hero-classroom.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImage}
      alt="Student studying in a bright Kenyan classroom"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
        Education is the Path to Healing.
      </h1>
      <p className="text-lg sm:text-xl text-primary-foreground/85 mb-10 font-sans leading-relaxed max-w-2xl mx-auto">
        Supporting teen mothers and survivors of GBV/FGM to complete their journey — with dignity, care, and hope.
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
  </section>
);

export default HeroSection;
