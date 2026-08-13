import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LightboxProvider } from '@/components/ImageLightbox';

export default function Home() {
  return (
    <LightboxProvider>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </LightboxProvider>
  );
}
