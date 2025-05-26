import { Button } from 'antd';
import { About, Features, Hero, Navbar } from './components';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <div className="h-[100vh] bg-red-300">
        down
        <Button>Sex</Button>
      </div>
      <div className="h-[100vh] bg-amber-200">
        down
        <Button>Sex</Button>
      </div>
    </div>
  );
};

export default Landing;
