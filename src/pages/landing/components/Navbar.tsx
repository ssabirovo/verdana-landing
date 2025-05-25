import { Flex } from 'antd';
// import navbar from "../../../assets/images/navbar-right";

import { useBoolean } from '../../../hooks/use-boolean';
import { Hamburger, MiniLogo, XMark } from '../../../assets/svg';
import { useEffect, useRef, useState } from 'react';
import { FaLocationArrow, FaTelegram } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const isNavbarOpened = useBoolean(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true); // New state for top scroll

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsTop(currentScrollY === 0); // True only at very top

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
    <Flex vertical className="text-primary bg-indigo-600">
      <Flex
        align="center"
        className={`fixed top-0 z-50 h-16 w-full px-16 transition-all duration-300 ease-in-out ${
          !showNavbar && !isNavbarOpened.value
            ? '-translate-y-full'
            : 'translate-y-0'
        } ${isTop ? 'bg-transparent' : 'bg-white shadow-md'}`}
      >
        <Flex align="center" gap={20} className="w-full">
          <Flex
            className="border-primary rounded-md border-2 p-1"
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
          <p>Xonadonlar</p>
          <p>Biz haqimizda</p>
        </Flex>
        <div>
          <MiniLogo />
        </div>
        <p className="w-full text-end">+998 (00) 000-44-33</p>
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
          className={`w-full transform bg-white py-16 pl-16 text-xl font-[300] transition-transform duration-500 ${
            isNavbarOpened.value ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Flex vertical gap={10}>
            <p>Afzalliklarimiz</p>
            <p>Xonadonlar ko'rinishi</p>
            <p>Joylashuv</p>
            <p>Bepul konsultatsiya</p>
            <p>Loyiha infratuzilmasi</p>
            <p>Ko'p beriladiga savollar</p>
            <p>Yandex karta</p>
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
