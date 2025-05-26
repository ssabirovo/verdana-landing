import { Button } from 'antd';
import { About, Faq, Features, Hero, Navbar } from './components';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Faq />
      <div className="h-[100vh] bg-red-300">
        down
        <Button>See</Button>
      </div>
      <div className="h-[100vh] bg-amber-200">
        down
        <Button>See</Button>
      </div>
    </div>
  );
};

export default Landing;
