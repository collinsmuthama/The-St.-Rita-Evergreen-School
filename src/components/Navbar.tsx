import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Our Staff", href: "/staff" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions", badge: "Ongoing" },
  {
    label: "Get Involved",
    href: "/donate",
    children: [
      { label: "Donate", href: "/donate" },
      { label: "Scholarships", href: "/donate#scholarships" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? "bg-card shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className={`font-display text-3xl font-bold transition-colors ${scrolled ? "text-foreground" : "text-primary"}`}>
          The St. Rita Evergreen School
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 hover:text-primary ${textColor}`}
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-terracotta text-terracotta-foreground animate-pulse">
                    {item.badge}
                  </span>
                )}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-card rounded-lg shadow-xl border border-border py-2 min-w-[180px] animate-float-in">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/donate"
            className="ml-4 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg animate-pulse-red hover:opacity-90 transition-opacity text-sm"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${textColor}`}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg animate-float-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary font-medium text-sm"
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-terracotta text-terracotta-foreground">
                      {item.badge}
                    </span>
                  )}
                </Link>
                {item.children && (
                  <div className="pl-6 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/donate"
              className="mt-2 text-center px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg text-sm"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
