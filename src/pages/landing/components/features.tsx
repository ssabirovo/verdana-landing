import { Flex } from 'antd';
import {
  PlayGround,
  Camera,
  Window,
  Park,
  MoreSpace,
  GreenZone,
} from '../../../assets/svg';

const features = [
  {
    icon: <PlayGround />,
    text: 'Bolalar maydonchasi',
    description: '',
  },
  {
    icon: <Camera />,
    text: 'Bolalar maydonchasi',
    description: '',
  },
  {
    icon: <Window />,
    text: 'Bolalar maydonchasi',
    description: '',
  },
  {
    icon: <Park />,
    text: 'Bolalar maydonchasi',
    description: '',
  },
  {
    icon: <MoreSpace />,
    text: 'Bolalar maydonchasi',
    description: '',
  },
  {
    icon: <GreenZone />,
    text: 'Bolalar maydonchasi',
    description: '',
  },
];

const Features = () => {
  return (
    <Flex className="my-30 px-16 max-sm:flex-col max-sm:px-6">
      <Flex vertical className="text-primary w-full p-5 py-20" gap={40}>
        <p className="text-4xl text-center">Afzalliklarimiz</p>
        <div className="grid grid-cols-2 gap-10" >
          {features.map(({ icon, text }) => (
            <Flex vertical justify="center" align="center" className='cursor-pointer text-center'>
              {icon}
              <p>{text}</p>
            </Flex>
          ))}
        </div>
      </Flex>
      <Flex
        vertical
        justify="end"
        className="w-full bg-[url('/public/images/kids.png')] bg-cover p-5 text-white"
      >
        <Flex vertical className="translate-y-[50%] bg-[#2C6466] p-4" gap={20}>
          <Flex align="end">
            <PlayGround />
            <p className="">Bolalar maydonchasi</p>
          </Flex>
          <p>
            Majmua ichida ikki qavatli o‘yin maydonchalari joy olishi ko'zda
            tutilgan bo‘lib, u yerda eng jajji rezidentlar ochiq havoda vaqtini
            maroqli va xavfsiz o‘tkazishlari mumkin.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Features;
