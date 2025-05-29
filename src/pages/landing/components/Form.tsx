import { Button, Flex, Input } from 'antd';
import { House } from '../../../assets/svg';

function FormSection() {
  return (
    <>
      <Flex id='Form' className="bg-[url('/images/form-bg.png')] bg-cover px-16 text-2xl max-sm:px-0">
        <Flex
          className="w-full px-14 py-16 max-sm:hidden"
          justify="center"
          align="end"
        >
          1
        </Flex>
        <Flex
          className="w-full bg-gradient-to-br from-[#2C6466] to-[#082425] px-14 py-[200px]"
          vertical
          gap={50}
        >
          <img width={200} src="/public/images/white-full-logo.svg" alt="" />
          <p className="text-2xl text-white">
            Be’pul konsultatsiya uchun ma’lumotlaringizni qoldiring
          </p>

          <Flex vertical gap={20}>
            <Input
              className="border-2 border-transparent text-2xl focus:border-green-700 focus:shadow-none"
              placeholder="Ism"
            />
            <Input
              type="number"
              className="border-2 border-transparent text-2xl focus:border-green-700 focus:shadow-none"
              placeholder="Telefon raqam"
            />
          </Flex>

          <Button className="bg-primary rounded-none border-none py-6 text-2xl text-white hover:bg-green-900">
            Yuborish
          </Button>
        </Flex>
      </Flex>
      <Flex id='Location' className="relative">
        <Flex
          vertical
          className="bg-primary absolute right-[50%] bottom-6 z-40 translate-x-[50%] p-5 text-[18px] text-white max-sm:w-[90%]"
          gap={20}
        >
          <Flex align="end" gap={10}>
            <House />
            <p className="leading-none">Loyiha manzili</p>
          </Flex>
          <p>Toshkent sh. Mirobod tumani, Shahrisabz tor ko'chasi, 2A</p>
        </Flex>
        <div className="z-30 w-full" style={{ overflow: 'hidden' }}>
          <iframe
            className="h-[500px]"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A465308b58897c2f537cd3531b140a7459af40719e1b7007c943e02975026028a&amp;source=constructor"
            width="100%"
          ></iframe>
        </div>
        
      </Flex>
    </>
  );
}

export default FormSection;
