import { Flex } from 'antd';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isNotTop, setIsNotTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsNotTop(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Flex
      justify="center"
      align="end"
      className="text-primary relative h-[100vh]"
    >
      <Flex
        className={`0 w-[60%] transition-all duration-800 ease-in-out max-sm:w-[90%] ${isNotTop && 'h-full w-full max-sm:w-full max-sm:gap-0'}`}
        vertical
      >
        <Flex
          gap={20}
          align="end"
          justify="space-between"
          className={`transition-all duration-800 ease-in-out max-sm:flex-col max-sm:items-start ${isNotTop ? 'h-0 -translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
        >
          <Flex vertical className="text-6xl">
            <p className="text-secondary">Premium</p>
            <p>Xonadonlar</p>
          </Flex>
          <Flex vertical className="text-end max-sm:text-start">
            <p className="text-secondary">Yangi O'zbekiston ko'chasi </p>
            <p>Ko'chasida Joylashgan</p>
            <p> Premium xonadonlar</p>
          </Flex>
        </Flex>
        <Flex
          className={`relative h-[400px] transition-all duration-500 ease-in-out max-sm:h-full ${isNotTop && 'h-full'}`}
        >
          <img
            src="/images/hero.png"
            className={`absolute top-0 h-[100%] w-full transition-all duration-800 ease-in-out max-sm:hidden ${isNotTop && 'brightness-80 contrast-[110%] saturate-[120%] max-sm:opacity-0'}`}
            alt=""
          />
          <img
            className={`absolute top-0 transition-all duration-800 ease-in-out ${isNotTop && 'top-[50%] right-[50%] translate-[50%] translate-y-[-50%]'}`}
            src="/images/border-white-logo.svg"
            alt=""
          />
          <img
            className={`absolute top-0 h-[100%] w-full max-sm:hidden ${isNotTop && 'opacity-0'}`}
            src="/images/hero-Photoroom.png"
            alt=""
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
