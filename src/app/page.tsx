import About from "@/components/about";
import Contact from "@/components/contact";
import Customers from "@/components/customers";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Customers />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
