import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: "oBrurUck4eU",
    title: "Our Journey of Impact",
  },
  {
    id: "lZ_8W5fijBk",
    title: "A Day at the School",
  },
  {
    id: "lZ_8W5fijBk",
    title: "Life at St. Rita Evergreen",
  },
];

const VideoCard = ({ id, title }: { id: string; title: string }) => {
  const [loaded, setLoaded] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  if (loaded) {
    return (
      <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="group relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border bg-muted w-full"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <Play className="w-7 h-7 text-accent-foreground ml-1" />
        </div>
      </div>
      <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-primary-foreground text-sm font-semibold text-left">
        {title}
      </p>
    </button>
  );
};

const YouTubeSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
        Watch Our Story
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        See the impact of education and compassion through the eyes of our students and community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {videos.map((v) => (
          <VideoCard key={v.title} id={v.id} title={v.title} />
        ))}
      </div>
    </div>
  </section>
);

export default YouTubeSection;
