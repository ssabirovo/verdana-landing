import { Flex } from 'antd';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';
import { useTranslation } from 'react-i18next';

function CarouselSection() {
  const { t } = useTranslation();

  const carouselItems = [
    { key: 'location', image: '/images/sayt-1.webp' },
    { key: 'investors', image: '/images/sayt-5.webp' },
    { key: 'future', image: '/images/sayt-2.webp' },
    { key: 'gratitude', image: '/images/sayt-6.webp' },
    { key: 'profit', image: '/images/sayt-3.webp' },
    { key: 'createdForYou', image: '/images/sayt-7.webp' },
    { key: 'space', image: '/images/sayt-4.webp' },
    { key: 'premiumLife', image: '/images/sayt-8.webp' },
  ];

  return (
    <Flex className="px-16 max-sm:px-6" justify="center">
      <Flex className="w-[70vw] pb-[100px] max-sm:w-full max-sm:px-6">
        <CustomCarousel>
          {carouselItems.map(({ key, image }) => (
            <Flex
              key={key}
              align="center"
              justify="end"
              className="relative w-full rounded-xl"
            >
              <img src={image} className="w-full rounded-xl" alt="" />
              <Flex className="absolute top-[50%] right-16 w-[35%] translate-y-[-50%] rounded-xl bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
                {t(`carousel.${key}`)}
              </Flex>
            </Flex>
          ))}
        </CustomCarousel>
      </Flex>
    </Flex>
  );
}

export default CarouselSection;
