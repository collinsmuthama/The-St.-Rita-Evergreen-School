import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, Building2, Globe, Package } from "lucide-react";

const methods = [
  {
    icon: Smartphone,
    title: "M-Pesa",
    details: [
      { label: "Paybill Number", value: "123456" },
      { label: "Account Name", value: "Esther's School" },
    ],
    accent: true,
  },
  {
    icon: Building2,
    title: "Bank Transfer",
    details: [
      { label: "Bank", value: "Equity Bank" },
      { label: "Account", value: "0123456789" },
      { label: "Branch", value: "Narok" },
      { label: "SWIFT", value: "EABORKE1XXX" },
    ],
    accent: false,
  },
  {
    icon: Globe,
    title: "GoFundMe",
    details: [{ label: "Link", value: "gofundme.com/esthers-school" }],
    accent: false,
    link: "https://gofundme.com/esthers-school",
  },
  {
    icon: Package,
    title: "In-Kind Donations",
    details: [
      { label: "Items Needed", value: "Mattresses, hygiene kits, bedding, uniforms, books" },
      { label: "Drop-off", value: "Esther's School, Narok County" },
    ],
    accent: false,
  },
];

const Donate = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="pt-28 pb-16 bg-accent/5">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Donate</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Your generosity transforms lives. Every contribution — big or small — helps a young mother complete her education and build a brighter future.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Payment Methods</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {methods.map((m) => (
            <div
              key={m.title}
              className={`rounded-xl p-6 border shadow-sm ${
                m.accent ? "border-accent bg-accent/5" : "border-border bg-card"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${m.accent ? "bg-accent/10" : "bg-primary/10"}`}>
                  <m.icon className={`w-5 h-5 ${m.accent ? "text-accent" : "text-primary"}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{m.title}</h3>
              </div>
              <div className="space-y-2">
                {m.details.map((d) => (
                  <div key={d.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{d.label}</span>
                    <span className="font-medium text-foreground">{d.value}</span>
                  </div>
                ))}
              </div>
              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Donate on GoFundMe
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Impact of donations */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6">Your Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { amount: "KES 2,000", desc: "One month of school meals" },
            { amount: "KES 10,000", desc: "One term's tuition fees" },
            { amount: "KES 25,000", desc: "Full term sponsorship" },
            { amount: "KES 50,000", desc: "Annual scholarship" },
          ].map((item) => (
            <div key={item.amount} className="bg-card rounded-xl p-5 border border-border shadow-sm">
              <p className="font-display text-xl font-bold text-accent">{item.amount}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Donate;
