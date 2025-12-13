import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/lib/mockData";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <div className="flex justify-between items-center mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Engineering Log</h1>
            <p className="text-xl text-muted-foreground">Technical deep dives and industry insights.</p>
          </motion.div>
          
          <Link href="/blog/new">
            <Button className="gap-2 hidden md:flex">
              <Plus className="h-4 w-4" /> New Post
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        {/* Mobile FAB */}
        <Link href="/blog/new">
           <Button size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl md:hidden z-50">
             <Plus className="h-6 w-6" />
           </Button>
        </Link>
      </div>
    </Layout>
  );
}
