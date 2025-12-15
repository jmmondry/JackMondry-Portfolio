import { Link, useLocation } from "wouter";
import { Menu, X, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold tracking-tight flex items-center gap-2 group">
            <span className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-lg font-mono text-sm group-hover:scale-110 transition-transform">
              JM
            </span>
            <span className="hidden sm:inline-block font-mono text-foreground/80 group-hover:text-primary transition-colors">
              Jack Mondry
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <div className="h-4 w-px bg-border mx-2" />
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/jackmondry/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary block py-2",
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <div className="border-t border-border pt-4 flex gap-4">
              <a href="https://www.linkedin.com/in/jackmondry/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
