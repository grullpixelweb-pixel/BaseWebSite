import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white selection:bg-blue-500/30">
      <Navbar />
      <Cart />
      <Hero />
      <Benefits />
      <Services />
      <Footer />
    </main>
  );
}
