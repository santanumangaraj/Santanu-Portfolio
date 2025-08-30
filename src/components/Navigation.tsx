import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // from shadcn/ui
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : "bg-background/80 md:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold gradient-text cursor-pointer" onClick={()=>navigate('/')}>SANTANU</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: "/about", label: "About" },
              { to: "/skills", label: "Skills" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop only) */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("mailto:santanu@gmail.com")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none ml-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="md:hidden mt-4 flex justify-center items-center text-xl flex-col gap-4">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            {/* CTA also in mobile */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("mailto:santanu@gmail.com")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
            >
              Let&apos;s Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
