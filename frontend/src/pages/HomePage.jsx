import Hero from '../components/Hero';
import About from '../components/About';
import Location from '../components/Location';
import Specialties from '../components/Specialties';
import Menu from '../components/Menu';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OrderButton from '../components/Order';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Location />
      <Specialties />
      <Menu />
      <Reviews />
      <Footer />
      <OrderButton />
    </>
  );
}

export default HomePage;
