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
import { useTranslation } from 'react-i18next';

const features = [
  { icon: <PlayGround />, key: 'playground', photoUrl: '/images/kids.webp' },
  { icon: <Camera />, key: 'security', photoUrl: '/images/camera-man.webp' },
  { icon: <Window />, key: 'cleanAir', photoUrl: '/images/clean-air.webp' },
  { icon: <Park />, key: 'parkNearby', photoUrl: '/images/park.webp' },
  { icon: <Parking />, key: 'parking', photoUrl: '/images/parking.webp' },
  { icon: <GreenZone />, key: 'greenZone', photoUrl: '/images/green.webp' },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const { icon, key } = features[activeIndex];

  return (
    <Flex
      id="Features"
      className="my-30 mb-16 px-16 max-sm:mb-0 max-sm:flex-col max-sm:px-6"
    >
      <Flex vertical className="text-primary w-full p-5 py-20" gap={40}>
        <p className="text-center text-4xl">{t('navbar.Afzalliklarimiz')}</p>
        <div className="grid grid-cols-2 gap-10">
          {features.map(({ icon, key }, featuresIndex) => (
            <Flex
              key={featuresIndex}
              vertical
              justify="center"
              align="center"
              className={`cursor-pointer text-center`}
              onClick={() => setActiveIndex(featuresIndex)}
            >
              {icon}
              <p>{t(`features.${key}.title`)}</p>
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
        <img
          className="w-[100%] rounded-xl"
          src={'/images/clean-air.webp'}
          alt=""
        />
        <Flex
          vertical
          className="w-[90%] -translate-y-[50%] rounded-xl bg-[#2C6466] p-4"
          gap={20}
        >
          <Flex align="center" gap={10}>
            {icon}
            <p className="leading-none">{t(`features.${key}.title`)}</p>
          </Flex>
          <p className="text-[16px] font-[200]">
            {t(`features.${key}.description`)}
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Features;
