import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import workspaceImg from "@assets/jack_sketch_portrait.png";
import { Button } from "@/components/ui/button";
import { Mail, Award, BookOpen, User } from "lucide-react";
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
                    alt="Portrait" 
                    className="relative rounded-2xl border border-white/10 shadow-2xl w-full transition-all duration-700"
                  />
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="p-6 bg-card border border-white/5 rounded-xl">
                    <div className="text-4xl font-bold text-primary mb-2">12+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="p-6 bg-card border border-white/5 rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Patents Issued/Filed</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <User className="h-4 w-4" /> Principal Systems Engineer
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Engineering for Impact</h1>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I am a dynamic technical leader with over 12 years of experience in the medical device industry, specializing in <span className="text-foreground font-medium">surgical robotics</span> and <span className="text-foreground font-medium">complex electromechanical systems</span>.
                  </p>
                  <p>
                    My career has been defined by bridging the gap between technical innovation and clinical reality. From designing miniature surgical robots at the University of Nebraska-Lincoln to leading system architecture for a dental robotic platform at Perceptive Technologies, I thrive in cross-functional environments.
                  </p>
                  <p>
                    I have a proven track record in navigating FDA regulatory pathways, managing requirements for Class II and III devices, and leading First-In-Human trials. I believe that rigorous systems engineering principles are the foundation of safe, effective, and transformative medical technology.
                  </p>
                </div>

                <div className="mt-10">
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="gap-2">
                      <Mail className="h-4 w-4" /> Get in Touch
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Education & Certs */}
            <div className="mt-32 grid md:grid-cols-2 gap-16">
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-primary" /> Education
                    </h2>
                    <div className="space-y-8 border-l-2 border-white/10 pl-8 relative">
                        <div className="relative">
                            <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-background border-2 border-primary"></div>
                            <h3 className="text-xl font-bold">University of Nebraska-Lincoln</h3>
                            <p className="text-primary font-mono text-sm mb-2">Master of Science in Mechanical Engineering</p>
                            <p className="text-muted-foreground">Specialization in Surgical Robotics</p>
                        </div>
                         <div className="relative">
                            <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-background border-2 border-muted"></div>
                            <h3 className="text-xl font-bold">University of Nebraska-Lincoln</h3>
                            <p className="text-muted-foreground font-mono text-sm mb-2">Bachelor of Science in Mechanical Engineering</p>
                            <p className="text-muted-foreground">Minor in Business Administration</p>
                        </div>
                    </div>
                </motion.div>

                 <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Award className="h-6 w-6 text-primary" /> Certifications & Honors
                    </h2>
                    <div className="grid gap-4">
                        {[
                            "Named Inventor on 10+ US Patents",
                            "AAMI Human Factors for Medical Devices",
                            "Certified SolidWorks Professional (CSWP)",
                            "Engineer-in-Training (EIT) Certification",
                            "Trained in Product Management"
                        ].map((cert, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-card/50 border border-white/5 rounded-lg">
                                <div className="h-2 w-2 bg-accent rounded-full"></div>
                                <span className="text-foreground/80">{cert}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Skills Section */}
            <div className="mt-32">
                <h2 className="text-3xl font-bold mb-12 text-center">Core Competencies</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { category: "Systems Engineering", skills: ["Requirements Mgmt", "System Architecture", "Risk Mgmt (ISO 14971)", "V & V"] },
                        { category: "Regulatory", skills: ["Design Controls", "FDA Submissions", "Usability (IEC 62366)", "Clinical Collaboration"] },
                        { category: "Technical", skills: ["Robotics", "Mechanical Design", "SolidWorks", "Mechanism Design"] },
                        { category: "Leadership", skills: ["Cross-Functional Leadership", "Team Management", "Strategic Development", "Mentorship"] }
                    ].map((group, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card/30 border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors"
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
