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
        className={`h-max w-[60%] transition-all duration-800 ease-in-out max-sm:w-[90%] ${isNotTop && 'w-full max-sm:w-full max-sm:gap-0'}`}
        vertical
      >
        <Flex
          gap={20}
          align="end"
          justify="space-between"
          className={`transition-all duration-800 ease-in-out max-sm:flex-col max-sm:items-start ${isNotTop ? '-translate-y-full opacity-0 max-sm:h-0' : 'translate-y-0 opacity-100'}`}
        >
          <Flex vertical className="text-6xl">
            <p className="text-secondary">Premium</p>
            <p>Xonadonlar</p>
          </Flex>
          <Flex vertical className="text-end max-sm:text-start">
            <p className="text-secondary">Zafar Rashidov </p>
            <p>Ko'chasida Joylashgan</p>
            <p> Premium xonadonlar</p>
          </Flex>
        </Flex>
        <Flex
          className={`relative h-max bg-amber-200 transition-all duration-500 ease-in-out max-sm:h-full`}
        >
          <img
            src="/public/images/hero.png"
            className={`transition-all duration-800 ease-in-out ${isNotTop && 'brightness-80 contrast-[110%] saturate-[120%] max-sm:opacity-0'}`}
            alt=""
          />
          {/* <img
            src="/public/images/hero.png"
            className={`absolute top-0 transition-all duration-800 ease-in-out ${isNotTop && 'brightness-80 contrast-[110%] saturate-[120%]'}`}
            alt=""
          /> */}
          <img
            className={`absolute top-0 transition-all duration-800 ease-in-out ${isNotTop && 'top-[50%] right-[50%] translate-[50%] translate-y-[-50%]'}`}
            src="/public/images/border-white-logo.svg"
            alt=""
          />
          <img
            className={`absolute top-0 ${isNotTop && 'opacity-0'}`}
            src="/public/images/hero-Photoroom.png"
            alt=""
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
