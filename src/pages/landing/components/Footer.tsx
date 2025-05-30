import { Flex } from 'antd';
import { FaInstagram } from 'react-icons/fa';
import { FaLocationDot, FaTelegram } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Flex
      justify="space-between"
      className="bg-[url('/images/footer-bg.png')] bg-cover px-16 py-16 text-[16px] text-white"
    >
      <Flex vertical className="w-full max-sm:items-center" gap={40}>
        <img className="w-[200px]" src="/images/white-full-logo.svg" alt="" />

        <a
          href="tel:+998 78 150 12 12"
          className="w-max text-[18px] text-white"
        >
          +998 78 150 12 12
        </a>

        <Flex gap={20} className="text-center max-sm:justify-center">
          <a
            className="text-white"
            href="https://www.instagram.com/verdana_uz "
          >
            <FaInstagram size={25} />
          </a>
          <a className="text-white" href="http://t.me/verdana_uz">
            <FaTelegram size={25} />
          </a>
          <a className="text-white" href="https://yandex.uz/maps/-/CHC0YGYG">
            <FaLocationDot size={25} />
          </a>
        </Flex>
      </Flex>
      <Flex vertical className="w-full text-center max-sm:hidden" gap={30}>
        <Flex vertical>
          <p className="font-[600]">{t('footer.salesOffice')}</p>
          <p className="font-[100]">
            {t('footer.address')}
          </p>
        </Flex>
        <Flex vertical>
          <p className="font-[600]">{t('footer.landmark.title')}</p>
          <p className="font-[100]">
            {t('footer.landmark.description')}
          </p>
        </Flex>
        <Flex vertical>
          <p className="font-[600]">{t('footer.workingDaysTitle')}</p>
          <p className="font-[100]">{t('footer.workingHours')}</p>
        </Flex>
      </Flex>
      <Flex
        vertical
        className="w-full text-end font-[100] max-sm:hidden"
        gap={10}
        align="end"
      >
        <p className="font-[600] text-white">{t('footer.sectionsTitle')}</p>
        <a className="w-max text-end text-white">{t('footer.sections.advantages')}</a>
        <a className="w-max text-end text-white">{t('footer.sections.apartments')}</a>
        <a className="w-max text-end text-white">{t('footer.sections.consultation')}</a>
        <a className="w-max text-end text-white">{t('footer.sections.infrastructure')}</a>
        <a className="w-max text-end text-white">{t('footer.sections.faq')}</a>
      </Flex>
    </Flex>
  );
};

export default Footer;
