import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Shield, CheckCircle } from "lucide-react";

const steps = ["Identity", "Background", "Sponsorship"];

const Admissions = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => { if (step < 2) setStep(step + 1); };
  const prevStep = () => { if (step > 0) setStep(step - 1); };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-28 pb-20 min-h-[80vh] flex items-center bg-background">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Application Submitted!</h1>
            <p className="text-muted-foreground">Thank you for applying. Our team will review your application and get in touch within 5 working days.</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Banner */}
      <section className="pt-28 pb-8 bg-terracotta">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-terracotta-foreground/20 text-terracotta-foreground rounded-full text-sm font-semibold mb-4 animate-pulse">
            🎓 Admissions Ongoing
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-terracotta-foreground mb-3">Apply for Admission</h1>
          <p className="text-terracotta-foreground/80 text-lg max-w-xl mx-auto">
            Begin your journey with us. Fill in the form below to apply — your data is safe and protected.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                  i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i + 1}
                </div>
                <span className={`text-sm font-medium hidden sm:inline ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
                {i < 2 && <div className={`w-8 h-0.5 ${i < step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); if (step === 2) setSubmitted(true); else nextStep(); }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm space-y-5"
          >
            {step === 0 && (
              <>
                <h2 className="font-display text-xl font-bold text-foreground">Step 1: Identity</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="fname">First Name</Label><Input id="fname" required className="mt-1.5" /></div>
                  <div><Label htmlFor="lname">Last Name</Label><Input id="lname" required className="mt-1.5" /></div>
                </div>
                <div><Label htmlFor="class">Class / Grade</Label><Input id="class" placeholder="e.g. Form 2" required className="mt-1.5" /></div>
                <div><Label htmlFor="kcpe">KCPE Marks</Label><Input id="kcpe" type="number" placeholder="e.g. 280" className="mt-1.5" /></div>
                <div><Label htmlFor="county">County</Label><Input id="county" placeholder="e.g. Narok" required className="mt-1.5" /></div>
              </>
            )}

            {step === 1 && (
              <>
                <h2 className="font-display text-xl font-bold text-foreground">Step 2: Background</h2>
                <div><Label htmlFor="guardian">Guardian Name</Label><Input id="guardian" required className="mt-1.5" /></div>
                <div><Label htmlFor="gphone">Guardian Phone</Label><Input id="gphone" type="tel" placeholder="+254 ..." required className="mt-1.5" /></div>
                <div><Label htmlFor="gjob">Guardian Occupation</Label><Input id="gjob" className="mt-1.5" /></div>
                <div>
                  <Label>Orphan Status</Label>
                  <div className="flex gap-4 mt-1.5">
                    {["Not Orphan", "Single Orphan", "Total Orphan"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 text-sm text-foreground">
                        <input type="radio" name="orphan" value={opt} className="accent-primary" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-display text-xl font-bold text-foreground">Step 3: Sponsorship</h2>
                <p className="text-sm text-muted-foreground">Select the sponsorship type that best describes your situation.</p>
                <div className="space-y-3">
                  {[
                    { value: "full", label: "Full Sponsorship", desc: "I need full financial support for fees, meals, and accommodation." },
                    { value: "partial", label: "Partial Sponsorship", desc: "I can cover some costs but need help with the rest." },
                    { value: "self", label: "Self-Sponsored", desc: "I or my guardian can cover all education costs." },
                  ].map((opt) => (
                    <label key={opt.value} className="flex gap-3 p-4 rounded-lg border border-border bg-background hover:border-primary/50 cursor-pointer transition-colors">
                      <input type="radio" name="sponsorship" value={opt.value} className="accent-primary mt-1" required />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{opt.label}</p>
                        <p className="text-xs text-muted-foreground">{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}

            <div className="flex justify-between pt-4">
              {step > 0 ? (
                <button type="button" onClick={prevStep} className="px-6 py-2.5 bg-muted text-foreground font-medium rounded-lg text-sm hover:bg-muted/80 transition-colors">
                  Back
                </button>
              ) : <div />}
              <button type="submit" className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity">
                {step === 2 ? "Submit Application" : "Next"}
              </button>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              <span>Your data is safe with us — GDPR & Kenya Data Protection compliant.</span>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
