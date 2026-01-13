import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Specialties />
      <Menu />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
