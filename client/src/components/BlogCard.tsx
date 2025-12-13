import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/lib/mockData";
import { Link } from "wouter";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group cursor-pointer h-full"
      >
        <Card className="h-full bg-card border-white/5 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center mb-2 text-xs text-muted-foreground font-mono">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground line-clamp-3 text-sm">
              {post.excerpt}
            </p>
          </CardContent>
          <CardFooter className="pt-0 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50 hover:bg-secondary">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}
