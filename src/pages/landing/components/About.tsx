import { Button, Flex } from 'antd';

const About = () => {
  return (
    <Flex
      id="About"
      className="w-full bg-gradient-to-br from-[#2C6466] to-[#082425] max-sm:flex-col"
    >
      <Flex className="w-full bg-[url('/images/about-left.png')] bg-cover p-16 py-20 text-transparent max-sm:hidden">
        a
      </Flex>
      <Flex
        vertical
        className="w-full p-16 py-20 text-white max-sm:px-6"
        gap={30}
      >
        <Flex vertical className="text-6xl font-[100]">
          <p>Biz</p>
          <p className="text-[#009499]">haqimizda</p>
        </Flex>
        <p className="text-xl font-[200]">
          Verdana — bu oddiy uy emas, bu hayot sifatining yangi darajasi. Yangi
          O‘zbekiston hududida joylashgan premium turar joy majmuasi bo‘lib,
          toza havo, tinch muhit va zamonaviy infratuzilmani o‘zida mujassam
          etadi.
        </p>
        <p className="text-xl font-[200]">
          Bizda hamma narsa siz uchun yashashni qulaylashtirish va
          investitsiyani foydali qilish uchun mo‘ljallangan. Keng hudud, ammo
          cheklangan xonadonlar soni — bu esa sizga sukunat va xotirjamlik
          taqdim etadi.
        </p>
        <Flex
          justify="space-between"
          className="text-xl font-[200] max-sm:flex-col max-sm:gap-2.5"
        >
          <Flex vertical>
            <p className="text-5xl">4-5</p>
            <p>Qavatlar soni</p>
          </Flex>
          <Flex vertical>
            <p className="text-5xl">120</p>
            <p>Xonadonlar soni</p>
          </Flex>
        </Flex>

        <Button className="w-max rounded-none" size="large">
          Batafsil
        </Button>
      </Flex>
    </Flex>
  );
};

export default About;
