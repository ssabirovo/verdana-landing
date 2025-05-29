import {
  About,
  Faq,
  Features,
  Footer,
  FormSection,
  Hero,
  Navbar,
  CarouselSection,
} from './components';
import Plans from './components/Plans';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CarouselSection />
      <Plans />
      <Faq />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Landing;
