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
      'Majmua ichida ikki qavatli o‘yin maydonchalari joy olishi ko‘zda tutilgan bo‘lib, u yerda eng jajji rezidentlar ochiq havoda vaqtini maroqli va xavfsiz o‘tkazishlari mumkin.',
  },
  {
    icon: <Camera />,
    text: 'Xavfsizlik',
    photoUrl: '/images/camera-man.png',
    description:
      'Majmuada 24/7 video kuzatuv va xavfsizlik xizmati faoliyat yuritadi. Bu esa barcha rezidentlar, ayniqsa bolalar va yoshi kattalar uchun tinch va xavotirsiz muhitni ta’minlaydi.',
  },
  {
    icon: <Window />,
    text: 'Toza havo',
    photoUrl: '/images/clean-air.png',
    description:
      'Hudud keng va yashil maydonlarga boy bo‘lib, bu yerda havoning tozaligi tabiiy tarzda saqlanadi. Ayniqsa ertalabki sayrlar va ochiq havodagi mashg‘ulotlar uchun ayni muddao.',
  },
  {
    icon: <Park />,
    text: "Yangi O'zbekiston bog'i yonida",
    photoUrl: '/images/park.png',
    description:
      'Majmua Yangi O‘zbekiston bog‘i yaqinida joylashgani sababli rezidentlar har kuni tabiat qo‘ynida sayr qilish, dam olish va sog‘lom turmush tarzini davom ettirish imkoniyatiga ega bo‘ladilar.',
  },
  {
    icon: <Parking />,
    text: 'Yer osti parkovka',
    photoUrl: '/images/parking.png',
    description:
      'Majmua hududida zamonaviy yer osti avtoturargohi qurilishi rejalashtirilgan bo‘lib, bu rezidentlarga qulay va xavfsiz avtomobil saqlash imkoniyatini yaratadi hamda hovli maydonining ochiq va tartibli bo‘lishini ta’minlaydi.',
  },
  {
    icon: <GreenZone />,
    text: 'Yashil hudud',
    photoUrl: '/images/green.png',
    description:
      'Majmua atrofi ko‘plab daraxtlar, gulzorlar va yashil maysazorlarga boy bo‘lib, ekologik jihatdan toza va ko‘rkam muhitni ta’minlaydi. Bu yashash uchun nafaqat qulay, balki sog‘lom muhitdir.',
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { description, icon, text, photoUrl } = features[activeIndex];

  return (
    <Flex id="Features" className="my-30 mb-16 px-16 max-sm:flex-col max-sm:px-6 max-sm:mb-0">
      <Flex vertical className="text-primary w-full p-5 py-20" gap={40}>
        <p className="text-center text-4xl">Afzalliklarimiz</p>
        <div className="grid grid-cols-2 gap-10">
          {features.map(({ icon, text }, featuresIndex) => (
            <Flex
              vertical
              justify="center"
              align="center"
              className="cursor-pointer text-center"
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
