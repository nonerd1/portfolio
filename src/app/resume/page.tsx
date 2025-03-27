import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Timeline from "@/components/resume/Timeline";

export const metadata = {
  title: 'Resume | Portfolio',
  description: 'View my professional experience, education, and certifications in electrical and computer engineering.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Timeline />
      </main>
      <Footer />
    </div>
  );
} 