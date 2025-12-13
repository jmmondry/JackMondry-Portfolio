import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import workspaceImg from "@assets/generated_images/medical_device_engineer_workspace.png";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl rounded-2xl"></div>
              <img 
                src={workspaceImg} 
                alt="Workspace" 
                className="relative rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-white/5 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 bg-card border border-white/5 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">12</div>
                <div className="text-sm text-muted-foreground">Products Launched</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Engineering for the Human Body</h1>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My journey began with a fascination for how machines could interact with biology. Today, I leverage that curiosity to design medical devices that improve patient outcomes and streamline clinical workflows.
              </p>
              <p>
                Specializing in <span className="text-foreground font-medium">Class III active implantables</span>, I have deep experience in low-power electronics, hermetic packaging, and navigating the complex regulatory landscape of the FDA and CE Mark.
              </p>
              <p>
                Beyond the technical, I believe in empathy-driven design. Understanding the surgeon's hand and the patient's daily life is just as critical as the circuit schematics.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" /> Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-32">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Proficiency</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { category: "Hardware Design", skills: ["Altium Designer", "PCB Layout", "Analog Circuit Design", "Power Management"] },
                    { category: "Mechanical", skills: ["SolidWorks", "Injection Molding", "Thermal Analysis", "Rapid Prototyping"] },
                    { category: "Firmware", skills: ["C/C++", "RTOS", "Bluetooth Low Energy", "DSP"] },
                    { category: "Regulatory", skills: ["ISO 13485", "IEC 60601", "FDA 510(k)", "Risk Management"] }
                ].map((group, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card/30 border border-white/5 p-6 rounded-xl"
                    >
                        <h3 className="text-lg font-bold text-primary mb-4">{group.category}</h3>
                        <ul className="space-y-2">
                            {group.skills.map(skill => (
                                <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </Layout>
  );
}
