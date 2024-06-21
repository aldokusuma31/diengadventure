import type { NextPage } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurService from '../components/OurService';
import Teams from '../components/Teams';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
      <Hero />
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="our-services">
          <OurService />
        </section>
        <section id="teams">
          <Teams />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
