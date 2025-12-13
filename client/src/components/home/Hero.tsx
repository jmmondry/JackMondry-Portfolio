import { motion } from "framer-motion";
import { ArrowRight, Download, Activity, Cpu } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_medical_engineering_hero_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
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

        {/* Abstract floating UI elements to represent tech */}
        <div className="hidden md:block relative h-[500px] w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-10 right-10 bg-card/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-64 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg text-accent">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">System Status</div>
                  <div className="font-mono text-emerald-400">Optimal</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[80%]"></div>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%]"></div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-20 left-10 bg-card/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-72 shadow-2xl"
            >
               <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Processor Load</div>
                  <div className="font-mono text-primary">12.4%</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`h-8 rounded bg-primary/${Math.random() > 0.5 ? '40' : '10'}`}></div>
                ))}
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
