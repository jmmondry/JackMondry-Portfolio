import { Linkedin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/20 text-primary w-8 h-8 flex items-center justify-center rounded-lg font-mono text-sm">
                JM
              </span>
              <span className="font-bold text-lg text-foreground">Jack Mondry</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Designing the future of healthcare technology, specializing in complex electromechanical and robotic systems.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/portfolio"><a className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></Link></li>
              <li><Link href="/blog"><a className="text-muted-foreground hover:text-primary transition-colors">Blog</a></Link></li>
              <li><Link href="/contact"><a className="text-muted-foreground hover:text-primary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/jackmondry/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Jack Mondry. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with React</p>
        </div>
      </div>
    </footer>
  );
}
