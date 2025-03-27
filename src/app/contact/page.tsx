import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: 'Contact | Get In Touch',
  description: 'Connect with me about job opportunities, project collaborations, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
} 