import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, Building2, Globe, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const presetAmounts = [500, 1000, 2000, 5000, 10000, 25000];

const methods = [
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

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = selectedAmount ?? (customAmount ? Number(customAmount) : 0);

  const handleMpesaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finalAmount || finalAmount < 1 || !phone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
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

      {/* M-Pesa Express Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="rounded-xl border-2 border-accent bg-accent/5 p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">M-Pesa Express</h2>
                <p className="text-sm text-muted-foreground">Instant mobile payment</p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">STK Push Sent!</h3>
                <p className="text-muted-foreground text-sm">Check your phone and enter your M-Pesa PIN to complete the donation of <strong>KES {finalAmount.toLocaleString()}</strong>.</p>
              </div>
            ) : (
              <form onSubmit={handleMpesaSubmit} className="space-y-6">
                {/* Preset amounts */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Select Amount (KES)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                        className={`rounded-lg py-3 text-sm font-semibold border transition-colors ${
                          selectedAmount === amt
                            ? "bg-accent text-accent-foreground border-accent"
                            : "bg-card text-foreground border-border hover:border-accent/50"
                        }`}
                      >
                        {amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom amount */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Or Enter Custom Amount</label>
                  <Input
                    type="number"
                    min="1"
                    placeholder="e.g. 3000"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">M-Pesa Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="e.g. 0712345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    maxLength={13}
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Your Name (optional)</label>
                  <Input
                    type="text"
                    placeholder="e.g. Jane Wanjiku"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                  />
                </div>

                {finalAmount > 0 && (
                  <p className="text-sm text-muted-foreground text-center">
                    You're donating <strong className="text-accent">KES {finalAmount.toLocaleString()}</strong>
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={!finalAmount || finalAmount < 1 || !phone || submitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-6"
                >
                  {submitting ? "Sending STK Push..." : "Pay with M-Pesa"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Other payment methods */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Other Payment Methods</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {methods.map((m) => (
              <div key={m.title} className="rounded-xl p-6 border border-border bg-card shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
                    <m.icon className="w-5 h-5 text-primary" />
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

      {/* Impact */}
      <section className="py-20 bg-background">
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
};

export default Donate;
