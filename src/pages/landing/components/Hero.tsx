import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
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
      className={`text-primary relative h-screen transition-all duration-700 ease-in-out`}
    >
      <Flex
        className={`w-[60%] transition-all duration-700 ease-in-out max-sm:w-[90%] ${isNotTop ? 'h-full w-full max-sm:w-full max-sm:gap-0' : ''}`}
        vertical
      >
        <Flex
          gap={20}
          align="end"
          justify="space-between"
          className={`transition-all duration-700 ease-in-out max-sm:flex-col max-sm:items-start ${isNotTop ? 'h-0 -translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}
        >
          <Flex vertical className="text-6xl">
            <p className="text-secondary">{t('hero.premium')}</p>
            <p>{t('hero.xonadonlar')}</p>
          </Flex>
          <Flex vertical className="text-end max-sm:text-start">
            <p className="text-secondary">{t('hero.yangiUzbekiston')}</p>
            <p>{t('hero.locationDescription')}</p>
            <p>{t('hero.premiumXonadonlar')}</p>
          </Flex>
        </Flex>
        <Flex
          className={`relative h-[400px] bg-amber-100 transition-all duration-700 ease-in-out max-sm:h-[250px] ${isNotTop ? 'h-full max-sm:h-full' : ''}`}
        >
          <img
            src="/images/hero.webp"
            className={`absolute bottom-0 h-full w-full object-cover transition-all duration-700 ease-in-out`}
            alt=""
          />
          <img
            className={`absolute top-0 transition-all duration-700 ease-in-out ${isNotTop ? 'top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%]' : ''}`}
            src="/images/border-white-logo.svg"
            alt=""
          />
          <img
            className={`absolute bottom-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out max-sm:hidden ${isNotTop ? 'opacity-0' : 'opacity-100'}`}
            src="/images/hero-Photoroom.webp"
            alt=""
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
