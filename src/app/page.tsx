import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutMe from "@/components/about/AboutMe";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import Timeline from "@/components/resume/Timeline";
import BlogGrid from "@/components/blog/BlogGrid";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <ProjectGrid />
        <Timeline />
        <BlogGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
