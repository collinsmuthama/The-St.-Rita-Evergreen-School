import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, BookOpen, Users, Shield } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", desc: "We meet every student with empathy, understanding, and unconditional support." },
  { icon: BookOpen, title: "Education", desc: "We believe education is the most powerful tool for transformation and healing." },
  { icon: Users, title: "Community", desc: "We build a family where every girl feels valued, safe, and empowered." },
  { icon: Shield, title: "Protection", desc: "We advocate for the rights and safety of every child and young mother." },
];

const team = [
  { name: "Esther Wanjiku", role: "Founder & Director", bio: "Driven by a personal mission to ensure no girl is left behind." },
  { name: "Grace Muthoni", role: "Head Teacher", bio: "15 years of experience transforming lives through education." },
  { name: "David Ochieng", role: "Counselor", bio: "Specializes in trauma-informed care for adolescent mothers." },
  { name: "Faith Chebet", role: "Vocational Trainer", bio: "Equipping students with practical skills for self-reliance." },
];

const AboutUs = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-16 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">About Us</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Esther's School is a haven for teen mothers and survivors of gender-based violence and FGM. We provide quality education, trauma counseling, and vocational training to help every girl reclaim her future.
        </p>
      </div>
    </section>

    {/* Our Story */}
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
        <div className="prose prose-lg mx-auto text-muted-foreground space-y-4 text-center">
          <p>
            Founded in 2018, Esther's School began as a small community initiative in rural Kenya. Our founder, Esther Wanjiku, witnessed firsthand how teen pregnancies and gender-based violence forced girls out of the education system — often permanently.
          </p>
          <p>
            What started as a single classroom with 12 students has grown into a full boarding school serving over 150 girls across 12 counties. We provide not just education, but a complete support system: daycare for their babies, trauma counseling, health services, and vocational training.
          </p>
          <p>
            Every girl who walks through our gates carries a story of resilience. We are here to ensure that story continues — with hope, dignity, and opportunity.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section id="mission" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12">
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To provide a safe, nurturing, and empowering educational environment for teen mothers and survivors of GBV/FGM, enabling them to complete their education, heal from trauma, and build self-sufficient futures.
          </p>
        </div>
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            A world where every girl, regardless of her past, has access to quality education and the support she needs to thrive — where no dream is abandoned because of circumstance.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Staff Team */}
    <section id="staff" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((m) => (
            <div key={m.name} className="bg-card rounded-xl p-6 border-2 border-primary/20 text-center shadow-sm">
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary/40" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground">{m.name}</h4>
              <p className="text-sm font-medium text-primary mb-2">{m.role}</p>
              <p className="text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutUs;
