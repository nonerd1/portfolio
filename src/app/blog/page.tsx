import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: 'Thoughts | Blog',
  description: 'Read my thoughts on technology, engineering, and industry trends.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
} 