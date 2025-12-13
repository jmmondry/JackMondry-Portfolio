import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/lib/mockData";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const post = blogPosts.find(p => p.id === params?.id);

  if (!post) return <NotFound />;

  return (
    <Layout>
      <article className="min-h-screen pb-24">
        {/* Hero Header */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-background/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20"></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 z-30 container mx-auto px-6 pb-12">
            <Link href="/blog">
              <Button variant="ghost" className="text-muted-foreground hover:text-white mb-6 -ml-4">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
              </Button>
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <Badge key={tag} className="bg-primary/20 text-primary border-primary/20 hover:bg-primary/30">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground font-mono text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> {post.readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 mt-12">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
            <p className="lead text-xl text-muted-foreground mb-8">{post.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <hr className="my-12 border-white/10" />
            
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold m-0">Share this post</h4>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
