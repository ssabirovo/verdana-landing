import { Flex } from 'antd';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';

function CarouselSection() {
  return (
    <CustomCarousel>
      <Flex
        align="center"
        justify="end"
        className="h-[90vh] w-full bg-[url('/public/images/carousel-1.png')] bg-cover p-16"
      >
        <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-16 text-4xl text-white">
          Yangi O'zbekistondagi nufuzli lokatsiya
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="end"
        className="h-[90vh] w-full bg-[url('/public/images/carousel-2.png')] bg-cover p-16"
      >
        <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-16 text-4xl text-white">
          Kelajak sari yo'l biz bilan boshlanadi
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="end"
        className="h-[90vh] w-full bg-[url('/public/images/carousel-3.png')] bg-cover p-16"
      >
        <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-16 text-4xl text-white">
          Premium loyiha, premium daromad
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="end"
        className="h-[90vh] w-full bg-[url('/public/images/carousel-4.png')] bg-cover p-16"
      >
        <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-16 text-4xl text-white">
          Kam xonadon, keng hudud
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="end"
        className="h-[90vh] w-full bg-[url('/public/images/carousel-5.png')] bg-cover p-16"
      >
        <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-16 text-4xl text-white">
          Investorlar tanlagan hudud
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="end"
        className="h-[90vh] w-full bg-[url('/public/images/carousel-6.png')] bg-cover p-16"
      >
        <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-16 text-4xl text-white">
          Har tongda o'zingizga rahmat aytasiz
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="end"
        className="h-[90vh] w-full bg-[url('/public/images/carousel-7.png')] bg-cover p-16"
      >
        <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-16 text-4xl text-white">
          Siz uchun yaratilgan makon
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="end"
        className="h-[90vh] w-full bg-[url('/public/images/carousel-8.png')] bg-cover p-16"
      >
        <Flex className="w-[35% ] bg-gradient-to-br from-[#2C6466] to-[#082425] p-8 py-16 text-4xl text-white">
          Verdana — premium klass, premium hayot
        </Flex>
      </Flex>
    </CustomCarousel>
  );
}

export default CarouselSection;
