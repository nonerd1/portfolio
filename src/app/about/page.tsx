import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutMe from "@/components/about/AboutMe";

export const metadata = {
  title: 'About Me | Portfolio',
  description: 'Learn about my background, skills, and experience as an electrical and computer engineer.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
} 