import { Flex } from 'antd';
// import navbar from "../../../assets/images/navbar-right";

import { useBoolean } from '../../../hooks/use-boolean';
import { Hamburger, MiniLogo, XMark } from '../../../assets/svg';
import { useEffect, useRef, useState } from 'react';
import { FaLocationArrow, FaTelegram } from 'react-icons/fa6';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const links = [
  { link: '#About', title: 'Biz haqimizda' },
  { link: '#Features', title: 'Afzalliklarimiz' },
  { link: '#Plans', title: 'Xonadonlar joylashuv' },
  { link: '#Form', title: 'Bepul konsultatsiya' },
  { link: '#Faq', title: "Ko'p beriladiga savollar" },
  { link: '#Location', title: 'Yandex karta' },
];

const Navbar = () => {
  const isNavbarOpened = useBoolean(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true); // New state for top scroll
  const [textColorChanged, setTextColorChanged] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setTextColorChanged(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsTop(currentScrollY < 100); // True only at very top

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Flex vertical>
      <a href="tel:+998 78 150 12 12">
        <Flex className="fixed right-16 bottom-16 z-50 cursor-pointer rounded-2xl bg-green-500 p-4 text-2xl text-white max-sm:right-6 max-sm:bottom-6 max-sm:p-3">
          <FaPhoneAlt />
        </Flex>
      </a>
      <Flex
        align="center"
        className={`text-primary fixed top-0 z-50 h-16 w-full px-16 transition-all duration-300 ease-in-out max-sm:flex-row-reverse max-sm:px-6 ${
          !showNavbar && !isNavbarOpened.value
            ? '-translate-y-full'
            : 'translate-y-0'
        } ${!textColorChanged ? 'text-primary bg-transparent' : isTop ? 'bg-transparent text-white' : 'text-primary bg-white shadow-md'} `}
      >
        <Flex align="center" gap={20} className="w-full max-sm:justify-end">
          <Flex
            className={`rounded-md border-2 p-1 ${!textColorChanged ? 'border-primary' : isTop ? 'border-white' : 'border-primary'}`}
            onClick={() => isNavbarOpened.onToggle()}
          >
            <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
              <div
                className={`absolute inset-0 flex h-full w-full items-center justify-center transition-transform duration-300 ease-in-out ${isNavbarOpened.value ? 'translate-y-full' : 'translate-y-0'}`}
              >
                <Hamburger />
              </div>
              <div
                className={`absolute inset-0 flex h-full w-full items-center justify-center transition-transform duration-300 ease-in-out ${isNavbarOpened.value ? 'translate-y-0' : '-translate-y-full'}`}
              >
                <XMark />
              </div>
            </div>
          </Flex>
          <a
            href="#Plans"
            className={`max-sm:hidden ${!textColorChanged ? 'text-primary' : isTop ? 'text-white' : 'text-primary'}`}
          >
            Xonadonlar
          </a>
          <a
            href="#About"
            className={`max-sm:hidden ${!textColorChanged ? 'text-primary' : isTop ? 'text-white' : 'text-primary'}`}
          >
            Biz haqimizda
          </a>
        </Flex>
        <div>
          <MiniLogo />
        </div>
        <a
          href="tel:+998 78 150 12 12"
          className={`max-sm:hidd w-full text-end max-sm:hidden ${!textColorChanged ? 'text-primary' : isTop ? 'text-white' : 'text-primary'}`}
        >
          78 150 12 12
        </a>
      </Flex>
      <Flex
        className={`fixed bottom-0 left-0 h-[calc(100vh-4rem)] w-full transition-opacity duration-500 ${
          isNavbarOpened.value
            ? 'z-50 opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <Flex
          justify="space-between"
          vertical
          className={`w-full transform bg-white py-16 pl-16 text-xl font-[300] transition-transform duration-500 max-sm:px-6 ${
            isNavbarOpened.value ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Flex vertical gap={10}>
            {links.map(({ link, title }) => (
              <a onClick={() => isNavbarOpened.onFalse()} href={link}>
                {title}
              </a>
            ))}
          </Flex>
          <Flex gap={10}>
            <FaTelegram size={20} />
            <FaInstagram size={20} />
            <FaLocationArrow size={20} />
          </Flex>
        </Flex>
        <div
          className={`w-full transform bg-[url('/images/navbar-right.png')] bg-right-top transition-transform duration-500 max-sm:hidden ${
            isNavbarOpened.value ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          1
        </div>
      </Flex>
    </Flex>
  );
};

export default Navbar;
