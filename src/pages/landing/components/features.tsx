import { Flex } from 'antd';
import {
  PlayGround,
  Camera,
  Window,
  Park,
  GreenZone,
  Parking,
} from '../../../assets/svg';
import { useState } from 'react';

const features = [
  {
    icon: <PlayGround />,
    text: 'Bolalar maydonchasi',
    photoUrl: '/images/kids.png',
    description:
      'Farzandlaringiz uchun xavfsiz, zamonaviy va ekologik toza materiallardan qurilgan o‘yin maydonchasi. Farzandingiz ko‘z oldingizda o‘ynaydi, siz esa xotirjam bo‘lasiz.',
  },
  {
    icon: <Camera />,
    text: 'Qo‘riqlanadigan hudud',
    photoUrl: '/images/camera-man.png',
    description:
      'Hudud to‘liq yopiq bo‘lib, 24/7 videokuzatuv va xavfsizlik xizmati bilan ta’minlangan. Har bir rezidentning osoyishtaligi biz uchun muhim.',
  },
  {
    icon: <Window />,
    text: 'Toza havo',
    photoUrl: '/images/clean-air.png',
    description:
      'Tirbandlikdan yiroq, shahar shovqinidan holi joyda joylashgan Verdana — toza havosi bilan sog‘lom turmush tarzini kafolatlaydi. Har nafasda yengillik.',
  },
  {
    icon: <Park />,
    text: 'Yangi O‘zbekiston bog‘i yaqinida',
    photoUrl: '/images/park.png',
    description:
      'Verdanadan chiqib, bir necha qadamda Yangi O‘zbekiston bog‘iga yetasiz. Ertalabgi yugurishlar, oilaviy sayrlar yoki sokin dam olish uchun ideal joy.',
  },
  {
    icon: <Parking />,
    text: 'Yer osti va yer usti avtoturargohlar',
    photoUrl: '/images/parking.png',
    description:
      'Majmua hududida zamonaviy yer osti avtoturargohi qurilishi rejalashtirilgan bo‘lib, bu rezidentlarga qulay va xavfsiz avtomobil saqlash imkoniyatini yaratadi hamda hovli maydonining ochiq va tartibli bo‘lishini ta’minlaydi.',
  },
  {
    icon: <GreenZone />,
    text: 'Yashil hudud',
    photoUrl: '/images/green.png',
    description:
      'Toza havo, sokin muhit va landshaft dizayn asosida barpo etilayotgan yashil maydonlar — bu yerda siz nafaqat yashaysiz, balki dam olasiz. Har kuni tabiat bag‘rida bo‘lish hissi.',
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { description, icon, text, photoUrl } = features[activeIndex];

  return (
    <Flex
      id="Features"
      className="my-30 mb-16 px-16 max-sm:mb-0 max-sm:flex-col max-sm:px-6"
    >
      <Flex vertical className="text-primary w-full p-5 py-20" gap={40}>
        <p className="text-center text-4xl">Afzalliklarimiz</p>
        <div className="grid grid-cols-2 gap-10">
          {features.map(({ icon, text }, featuresIndex) => (
            <Flex
              key={featuresIndex}
              vertical
              justify="center"
              align="center"
              className={`cursor-pointer text-center`}
              onClick={() => setActiveIndex(featuresIndex)}
            >
              {icon}
              <p>{text}</p>
            </Flex>
          ))}
        </div>
      </Flex>
      <Flex
        vertical
        justify="end"
        align="center"
        className={`w-full text-white`}
      >
        <img className="w-[100%]" src={photoUrl} alt="" />
        <Flex
          vertical
          className="w-[90%] -translate-y-[50%] bg-[#2C6466] p-4"
          gap={20}
        >
          <Flex align="end" gap={10}>
            {icon}
            <p className="leading-none">{text}</p>
          </Flex>
          <p className="text-[16px] font-[200]">{description}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Features;
