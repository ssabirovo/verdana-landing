import { Button, Flex, Input } from 'antd';
import { House } from '../../../assets/svg';

function FormSection() {
  return (
    <>
      <Flex className="bg-[url('/images/form-bg.png')] bg-cover px-16 text-2xl max-sm:px-0">
        <Flex
          className="w-full px-14 py-16 max-sm:hidden"
          justify="center"
          align="end"
        >
          <img src="/public/images/white-full-logo.svg" alt="" />
        </Flex>
        <Flex
          className="w-full bg-white/30 px-14 py-[200px] backdrop-blur-lg"
          vertical
          gap={50}
        >
          <p className="text-primary text-2xl">
            Be’pul konsultatsiya uchun ma’lumotlaringizni qoldiring
          </p>

          <Flex vertical gap={20}>
            <Input
              className="rounded-none border-2 border-transparent text-2xl focus:border-green-700 focus:shadow-none"
              placeholder="Ism"
            />
            <Input
              type="number"
              className="rounded-none border-2 border-transparent text-2xl focus:border-green-700 focus:shadow-none"
              placeholder="Telefon raqam"
            />
          </Flex>

          <Button className="bg-primary rounded-none border-none py-6 text-2xl text-white hover:bg-green-900">
            Yuborish
          </Button>
        </Flex>
      </Flex>
      <Flex className="relative">
        <Flex
          vertical
          className="bg-primary absolute right-[50%] bottom-6 z-40 p-5 text-[18px] text-white translate-x-[50%]"
          gap={20}
        >
          <Flex align="end" gap={10}>
            <House />
            <p className="leading-none">Loyiha manzili</p>
          </Flex>
          <p>Toshkent sh. Mirobod tumani, Shahrisabz tor ko'chasi, 2A</p>
        </Flex>
        <div className="z-30 w-full" style={{ overflow: 'hidden' }}>
          <a
            href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '0px',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ташкент
          </a>
          <a
            href="https://yandex.uz/maps/10335/tashkent/?ll=69.388434%2C41.320815&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.383164%2C41.319419&whatshere%5Bzoom%5D=18.02&z=15.84"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '14px',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс Карты
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.388434%2C41.320815&mode=whatshere&whatshere%5Bpoint%5D=69.383164%2C41.319419&whatshere%5Bzoom%5D=18.02&z=15.84"
            width="100%"
            height="600"
            frameBorder="1"
            allowFullScreen
            style={{ position: 'relative' }}
            title="Yandex Map"
          ></iframe>
        </div>
      </Flex>
    </>
  );
}

export default FormSection;
