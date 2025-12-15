import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              I'm always open to discussing new opportunities, medical technology trends, or potential collaborations.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              The best way to reach out is through LinkedIn. Let's connect and explore what we can build together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-white/5 rounded-2xl p-12 shadow-2xl flex flex-col items-center justify-center text-center"
          >
            <div className="mb-8 p-6 bg-primary/10 rounded-full text-primary ring-1 ring-primary/20">
              <Linkedin className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Connect on LinkedIn</h2>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Follow my professional journey and let's start a conversation about medical device engineering and innovation.
            </p>
            <a href="https://www.linkedin.com/in/jackmondry/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Open LinkedIn <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
