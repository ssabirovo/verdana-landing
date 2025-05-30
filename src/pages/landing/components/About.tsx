import { Button, Flex } from 'antd';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
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
          <p>{t('about.biz')}</p>
          <p className="text-[#009499]">{t('about.haqimizda')}</p>
        </Flex>
        <p className="text-xl font-[200]">{t('about.paragraph1')}</p>
        <p className="text-xl font-[200]">{t('about.paragraph2')}</p>
        <Flex
          justify="space-between"
          className="text-xl font-[200] max-sm:flex-col max-sm:gap-2.5"
        >
          <Flex vertical>
            <p className="text-5xl">4-5</p>
            <p>{t('about.qavatlar')}</p>
          </Flex>
          <Flex vertical>
            <p className="text-5xl">120</p>
            <p>{t('about.xonadonlar')}</p>
          </Flex>
        </Flex>

        <a href="#Form">
          <Button className="w-max rounded-none" size="large">
            {t('about.batafsil')}
          </Button>
        </a>
      </Flex>
    </Flex>
  );
};

export default About;
