import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectGrid from "@/components/portfolio/ProjectGrid";

export const metadata = {
  title: 'Portfolio | Projects',
  description: 'Explore my projects in hardware design, PCB development, and web applications.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
} 