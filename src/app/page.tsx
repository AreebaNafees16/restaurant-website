import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Favorites from "./components/favorites";
import Special from "./components/special";
import Testimonials from "./components/testimonials";
import Journey from "./components/journey";
import Footer from "./components/footer";

export default function Main() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Favorites />
    <Special />
    <Testimonials />
    <Journey />
    </div>
  );
}
