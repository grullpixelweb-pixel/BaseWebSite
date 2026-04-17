import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import StoriesSection from "../components/StoriesSection";

import Cart from "../components/Cart";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-brand-primary/30">
      <Navbar />
      <Cart />
      <Hero />
      <Benefits />
      <Services />
      <StoriesSection />
      <Footer />
    </main>
  );
}
