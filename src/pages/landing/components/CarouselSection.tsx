import { Flex } from 'antd';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';
import { useTranslation } from 'react-i18next';

function CarouselSection() {
  const { t } = useTranslation();

  const carouselItems = [
    { key: 'location', image: '/images/carousel-1.png' },
    { key: 'future', image: '/images/carousel-2.png' },
    { key: 'profit', image: '/images/carousel-3.png' },
    { key: 'space', image: '/images/carousel-4.png' },
    { key: 'investors', image: '/images/carousel-5.png' },
    { key: 'gratitude', image: '/images/carousel-6.png' },
    { key: 'createdForYou', image: '/images/carousel-7.png' },
    { key: 'premiumLife', image: '/images/carousel-8.png' },
  ];

  return (
    <Flex className="px-16 pb-[100px]">
      <CustomCarousel>
        {carouselItems.map(({ key, image }) => (
          <Flex
            key={key}
            align="center"
            justify="end"
            className={`h-[50vh] w-full bg-[url('/public${image}')] bg-cover p-16 max-sm:p-6`}
          >
            <Flex className="w-[35%] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
              {t(`carousel.${key}`)}
            </Flex>
          </Flex>
        ))}
      </CustomCarousel>
    </Flex>
  );
}

export default CarouselSection;
