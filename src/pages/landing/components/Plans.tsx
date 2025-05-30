import { Button, Flex } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const planirovkalar = [
  {
    roomCount: 1,
    price: '1 550 080 000',
    allMeters: 45.8,
    photoUrl: '/images/1-xona.png',
    rooms: [
      {
        name: 'Oshxona',
        meter: 15.2,
      },
      {
        name: 'koridor',
        meter: 8.5,
      },
      {
        name: 'Umumiy xona',
        meter: 16.4,
      },
      {
        name: 'Hojatxona',
        meter: 2.4,
      },
      {
        name: 'Hammom',
        meter: 16.4,
      },
    ],
  },

  {
    roomCount: 2,
    price: '1 550 080 000',
    allMeters: 53.1,
    photoUrl: '/images/2-xona.png',
    rooms: [
      {
        name: 'Studiya',
        meter: 30.8,
      },
      {
        name: 'Hojatxona',
        meter: 4.2,
      },
      {
        name: 'Yotoqxona',
        meter: 18.1,
      },
    ],
  },
  {
    roomCount: 3,
    price: '1 550 080 000',
    allMeters: 86.6,
    photoUrl: '/images/3-xona.png',
    rooms: [
      {
        name: 'Oshxona',
        meter: 37.7,
      },
      {
        name: 'Koridor',
        meter: 16.5,
      },
      {
        name: 'Hojatxona',
        meter: 2.7,
      },
      {
        name: 'Dush',
        meter: 2.9,
      },
      {
        name: 'Yotoqxona-1',
        meter: 12.3,
      },
      {
        name: 'Yotoqxona-2',
        meter: 14.3,
      },
    ],
  },
  {
    roomCount: 4,
    price: '1 550 080 000',
    allMeters: 120.1,
    photoUrl: '/images/4-xona.png',
    rooms: [
      {
        name: 'Oshxona',
        meter: 38.3,
      },
      {
        name: 'Koridor',
        meter: 18.9,
      },
      {
        name: 'Hojatxona',
        meter: 3.1,
      },
      {
        name: 'Dush',
        meter: 3.3,
      },
      {
        name: 'Yotoqxona-1',
        meter: 18.4,
      },
      {
        name: 'Yotoqxona-2',
        meter: 15.7,
      },
      {
        name: 'Yotoqxona-2',
        meter: 12.4,
      },
    ],
  },
];

const Plans = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const { t } = useTranslation();
  const { allMeters, photoUrl, price, roomCount, rooms } =
    planirovkalar[activeIndex];

  return (
    <Flex
      id="Plans"
      vertical
      className="text-primary gap-14 py-16 max-sm:gap-5 max-sm:pt-0"
      align="center"
    >
      <p className="text-5xl max-sm:text-2xl">{t('plans.title')}</p>
      <Flex className="gap-5 max-sm:gap-1">
        {planirovkalar.map(({ roomCount }, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-primary cursor-pointer bg-gray-100 px-6 py-3 max-sm:px-3 max-sm:py-1 ${index === activeIndex ? 'bg-primary text-white' : 'text-primary bg-gray-100'}`}
          >
            {t('plans.roomCount', { count: roomCount })}
          </div>
        ))}
      </Flex>
      <Flex className="w-full max-sm:flex-col">
        <Flex
          className="w-full p-16 max-sm:p-4 max-sm:py-0"
          justify="center"
          align="center"
        >
          <img src={photoUrl}></img>
        </Flex>
        <Flex
          vertical
          gap={40}
          className="bg-primary w-full p-16 text-white max-sm:items-center max-sm:p-6"
          justify="space-between"
        >
          <Flex vertical gap={40} className="w-full">
            <Flex
              justify="space-between"
              className="w-full text-4xl font-[600]"
              align="start"
            >
              <Flex vertical>
                <p>{t('plans.roomCount', { count: roomCount })}</p>
                <p className="text-[16px] font-[100]">{t('plans.fromPrice', { price })}</p>
              </Flex>
              <p>{allMeters}м²</p>
            </Flex>

            <Flex gap={20} vertical className="w-full text-[18px]">
              {rooms.map(({ meter, name }, roomsIndex) => (
                <Flex
                  key={roomsIndex}
                  justify="space-between"
                  className="w-full border-b border-white pb-1"
                >
                  <p>{t(`plans.rooms.${name}`)}:</p>
                  <p>{meter}м²</p>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Button className="w-max rounded-none border-none px-6 py-5 text-[18px]">
            {t('plans.contact')}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Plans;
