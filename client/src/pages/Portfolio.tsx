import { Layout } from "@/components/layout/Layout";
import { projects } from "@/lib/mockData";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">A collection of engineering projects spanning from neurosurgery to dentistry with novel technology development at their core. Each project represents a unique challenge in user needs, risk management, and system architecture.</p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
