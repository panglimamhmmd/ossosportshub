import { Helmet } from 'react-helmet-async';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Membership from './components/Membership';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Helmet>
        <title>OSSO SPORTSHUB - On-Court Sport. Off-Court Social.</title>
        <meta name="description" content="OSSO is your premium destination for padel, wellness, and connection. Experience the perfect blend of competition and community." />
      </Helmet>
      
      <div className="bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 font-body antialiased min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <Facilities />
          <Gallery />
          <Testimonials />
          <Membership />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
