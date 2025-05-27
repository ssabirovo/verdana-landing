import {
  About,
  Faq,
  Features,
  Footer,
  FormSection,
  Hero,
  Navbar,
} from './components';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Faq />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Landing;
