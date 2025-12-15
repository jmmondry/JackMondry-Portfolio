import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Accomplishments } from "@/components/home/Accomplishments";
import { projects } from "@/lib/mockData";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Accomplishments />
      
      {/* Featured Projects Preview */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Selected Works</h2>
              <p className="text-muted-foreground">Engineering solutions for complex medical challenges.</p>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost" className="hidden md:flex gap-2 group">
                View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio">
              <Button variant="outline" className="w-full">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
