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
    <Flex className="px-16 max-sm:px-0" justify="center">
      <Flex className="w-[70vw] overflow-hidden rounded-xl pb-[100px] max-sm:w-full max-sm:px-6">
        <CustomCarousel>
          {carouselItems.map(({ key, image }) => (
            <Flex
              key={key}
              align="center"
              justify="end"
              className="relative w-full overflow-hidden rounded-xl"
            >
              <img src={image} className="w-full rounded-xl" alt="" />
              <Flex className="max-sm: absolute right-16 bottom-[50%] w-[35%] translate-y-[50%] max-sm:bottom-3 rounded-xl bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 text-2xl text-white max-sm:right-[50%] max-sm:w-[90%] max-sm:translate-x-[50%] max-sm:translate-y-0 max-sm:p-3 max-sm:text-[16px]">
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
