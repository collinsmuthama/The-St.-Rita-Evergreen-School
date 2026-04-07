import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">We'd love to hear from you. Reach out with questions, partnership inquiries, or words of encouragement.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Get in Touch</h2>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Location</p>
                <p className="text-muted-foreground text-sm">The St. Rita Evergreen School, Nyahururu, Kenya — 13 km from Nyahururu town along the Nyahururu–Nyeri road</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground text-sm">+254 721 101 249/+254 731 521 306</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground text-sm">thestritaevergreenschools@gmail.com</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63791.5!2d36.35!3d-0.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17881552be029e1d%3A0x72f2e51b72c1c4e8!2sNyahururu!5e0!3m2!1sen!2ske!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="School Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                  const subject = encodeURIComponent("Contact from " + name);
                  const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`);
                  window.open(`mailto:thestritaevergreenschools@gmail.com?subject=${subject}&body=${body}`, "_blank");
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+254 ..." required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help?"
                    required
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
