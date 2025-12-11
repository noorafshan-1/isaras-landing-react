import Home from "./pages/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useGlobalUI } from "./hooks/useGlobalUI";

function App() {
  useGlobalUI();
  return (
    <>
      <Header />
      <Hero />
      <Home />
      <Footer />
    </>
  );
}

export default App;
