import Container from "./components/Container";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Features from "./layout/Features";
import MarketTrends from "./layout/MarketTrends";
import Subscribe from "./layout/Subscribe";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div className="bg-dark text-white">
      <Container>
        <Header />
        <Hero />
        <Features />
        <MarketTrends />
        <Subscribe />
        <Footer />
      </Container>
    </div>
  );
}
