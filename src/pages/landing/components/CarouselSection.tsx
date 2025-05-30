import { Flex } from 'antd';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';
import { useTranslation } from 'react-i18next';

function CarouselSection() {
  const { t } = useTranslation();
  return (
    <Flex className="px-16 pb-[100px]">
      <CustomCarousel>
        <Flex
          align="center"
          justify="end"
          className="h-[50vh] w-full bg-[url('/public/images/carousel-1.png')] bg-cover p-16 max-sm:p-6"
        >
          <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
            {t('carousel.location')}
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="end"
          className="h-[50vh] w-full bg-[url('/public/images/carousel-2.png')] bg-cover p-16 max-sm:p-6"
        >
          <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
            {t('carousel.future')}
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="end"
          className="h-[50vh] w-full bg-[url('/public/images/carousel-3.png')] bg-cover p-16 max-sm:p-6"
        >
          <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
            {t('carousel.profit')}
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="end"
          className="h-[50vh] w-full bg-[url('/public/images/carousel-4.png')] bg-cover p-16 max-sm:p-6"
        >
          <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
            {t('carousel.space')}
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="end"
          className="h-[50vh] w-full bg-[url('/public/images/carousel-5.png')] bg-cover p-16 max-sm:p-6"
        >
          <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
            {t('carousel.investors')}
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="end"
          className="h-[50vh] w-full bg-[url('/public/images/carousel-6.png')] bg-cover p-16 max-sm:p-6"
        >
          <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
            {t('carousel.gratitude')}
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="end"
          className="h-[50vh] w-full bg-[url('/public/images/carousel-7.png')] bg-cover p-16 max-sm:p-6"
        >
          <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
            {t('carousel.createdForYou')}
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="end"
          className="h-[50vh] w-full bg-[url('/public/images/carousel-8.png')] bg-cover p-16 max-sm:p-6"
        >
          <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-8 text-2xl text-white">
            {t('carousel.premiumLife')}
          </Flex>
        </Flex>
      </CustomCarousel>
    </Flex>
  );
}

export default CarouselSection;
