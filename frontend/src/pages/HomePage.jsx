import Hero from '../components/Hero';
import About from '../components/About';
import Location from '../components/Location';
import Specialties from '../components/Specialties';
import Menu from '../components/Menu';
import Order from '../components/Order';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <>
    <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="location">
        <Location />
      </div>
      <div id="specialties">
        <Specialties />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <Order />
      <Reviews />
      <Footer />
    </>
  );
}

export default HomePage;
