import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_medical_engineering_hero_background.png";
import portraitImg from "@assets/Gemini_Generated_Image_jegikpjegikpjegi_1765653814174.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-50"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Life-Saving
            </span> <br />
            Technology.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Medical Device Engineer specializing in implantable electronics, regulatory compliance, and precision instrumentation.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio">
              <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                View Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/10 hover:text-primary">
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Portrait Image */}
        <div className="hidden md:flex justify-end relative h-[600px] items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative w-full max-w-md"
            >
              <img 
                src={portraitImg} 
                alt="Jack Mondry" 
                className="relative z-10 transition-all duration-700 object-cover w-full h-auto"
                style={{ 
                  maskImage: "radial-gradient(ellipse closest-side, black 10%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse closest-side, black 10%, transparent 100%)",
                  filter: "brightness(1.2)"
                }}
              />

              {/* Technical Caption */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-white/10 p-4 rounded-lg shadow-xl z-20 backdrop-blur-md">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Status</div>
                <div className="font-mono text-sm font-bold flex items-center gap-2">
                   <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                   Available for Hire
                </div>
              </div>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
