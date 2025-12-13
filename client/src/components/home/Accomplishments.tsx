import { motion } from "framer-motion";
import { accomplishments } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";

export function Accomplishments() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Milestones</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-card/50 border-white/5 hover:border-primary/30 transition-colors h-full">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 bg-primary/10 rounded-full text-primary ring-1 ring-primary/20">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-mono text-secondary-foreground border border-white/5">
                    {item.year}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
