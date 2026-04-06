import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const categories = ["All", "Campus", "Vocational", "Events", "Renovations"];

const images = [
  { src: heroImage, alt: "Students in classroom", category: "Campus" },
  { src: heroImage, alt: "Vocational training session", category: "Vocational" },
  { src: heroImage, alt: "Graduation ceremony", category: "Events" },
  { src: heroImage, alt: "New classroom building", category: "Renovations" },
  { src: heroImage, alt: "Library reading corner", category: "Campus" },
  { src: heroImage, alt: "Sewing workshop", category: "Vocational" },
  { src: heroImage, alt: "Community awareness walk", category: "Events" },
  { src: heroImage, alt: "Painted classrooms", category: "Renovations" },
  { src: heroImage, alt: "Science lab session", category: "Campus" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg">Impact in pictures — see the transformation happening at Esther's School.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="block mb-4 w-full rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-3 bg-card">
                  <p className="text-sm text-muted-foreground">{img.alt}</p>
                  <span className="text-xs text-primary font-medium">{img.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="w-full rounded-xl shadow-2xl"
            />
            <p className="text-center text-primary-foreground mt-4 text-sm">{filtered[lightbox]?.alt}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
