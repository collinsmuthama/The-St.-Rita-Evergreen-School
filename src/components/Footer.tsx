import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";

const Footer = () => (
  <>
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Esther's School</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Empowering teen mothers and survivors of GBV/FGM through quality education, counseling, and community support.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Center */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            {["Home", "About Us", "Admissions", "Gallery", "Get Involved", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-primary-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">Subscribe for progress updates and impact stories.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary"
            />
            <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Join
            </button>
          </form>
          <div className="mt-6 text-sm text-primary-foreground/70">
            <p className="font-semibold text-primary-foreground">Emergency Contact</p>
            <p>+254 700 000 000</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Esther's School. All rights reserved.
      </div>
    </footer>

    {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-xl hover:opacity-90 transition-opacity group"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">Need Help? Chat with us</span>
    </a>
  </>
);

export default Footer;
