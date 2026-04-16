import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import ProjectCTA from "../components/ProjectCTA";
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
      <Footer />
    </main>
  );
}
