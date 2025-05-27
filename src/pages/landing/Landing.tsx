import {
  About,
  Faq,
  Features,
  Footer,
  FormSection,
  Hero,
  Navbar,
} from './components';
import Plans from './components/Plans';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Plans />
      <Faq />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Landing;
