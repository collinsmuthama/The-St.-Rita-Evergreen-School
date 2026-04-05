import { BookOpen, Monitor, Package, Zap, PaintBucket } from "lucide-react";

const needs = [
  {
    icon: BookOpen,
    title: "Scholarships",
    desc: "Sponsor a student's term fees and give her the gift of continued education.",
  },
  {
    icon: Monitor,
    title: "Equip Labs",
    desc: "Provide computers and science kits to build future-ready skills.",
  },
  {
    icon: Package,
    title: "Basic Necessities",
    desc: "Donate mattresses, hygiene kits, and bedding for safe living.",
  },
  {
    icon: Zap,
    title: "Utilities",
    desc: "Help us cover monthly water and electricity bills to keep the lights on.",
  },
  {
    icon: PaintBucket,
    title: "Renovations",
    desc: "Help us repair and paint our learning spaces for a brighter environment.",
  },
];

const PartnerCards = () => (
  <section id="involved" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
        Partner With Us
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Every contribution directly transforms a young life. Choose how you'd like to help.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {needs.map((need) => (
          <div
            key={need.title}
            className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <need.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{need.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{need.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerCards;
