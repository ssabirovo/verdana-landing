import { Button, Flex, Input } from 'antd';
import { House } from '../../../assets/svg';

function FormSection() {
  return (
    <div className="w-">
      <Flex
        id="Form"
        className="flex-row-reverse bg-[url('/images/form-bg-3.png')] bg-cover px-16 text-2xl max-sm:px-0"
      >
        <Flex
          className="w-full px-14 py-16 max-sm:hidden"
          justify="center"
          align="end"
        >
          1
        </Flex>
        <Flex
          className="my-[100px] rounded-2xl bg-white p-14"
          align="center"
          vertical
          gap={40}
        >
          <img width={200} src="/public/images/full-logo-dark.svg" alt="" />
          <p className="text-primary text-2xl">
            Be’pul konsultatsiya uchun ma’lumotlaringizni qoldiring
          </p>

          <Flex vertical gap={20} className="w-full">
            <Input
              className="w-full border-2 border-gray-200 text-2xl focus:border-green-700 focus:shadow-none"
              placeholder="Ism"
            />
            <Flex className="w-full">
              <Flex
                className="text-primary rounded-tl-md rounded-bl-md bg-gray-200 p-2 px-4 text-[18px]"
                align="center"
              >
                +998
              </Flex>
              <Input
                type="number"
                className="rounded-tl-none rounded-bl-none border-2 border-gray-200 text-2xl focus:border-green-700 focus:shadow-none"
                placeholder="Telefon raqam"
              />
            </Flex>
          </Flex>

          <Button className="bg-primary border-primary w-full border-none py-6 text-2xl text-white hover:border hover:bg-green-900">
            Yuborish
          </Button>
        </Flex>
      </Flex>
      <Flex
        id="Form"
        className="bg-[url('/images/form-bg-3-flip.png')] bg-cover px-16 text-2xl max-sm:px-0"
      >
        <Flex
          className="w-full px-14 py-16 max-sm:hidden"
          justify="center"
          align="end"
        >
          1
        </Flex>
        <Flex
          className="my-[100px] rounded-2xl bg-white p-14"
          align="center"
          vertical
          gap={40}
        >
          <img width={200} src="/public/images/full-logo-dark.svg" alt="" />
          <p className="text-primary text-2xl">
            Be’pul konsultatsiya uchun ma’lumotlaringizni qoldiring
          </p>

          <Flex vertical gap={20} className="w-full">
            <Input
              className="w-full border-2 border-gray-200 text-2xl focus:border-green-700 focus:shadow-none"
              placeholder="Ism"
            />
            <Flex className="w-full">
              <Flex
                className="text-primary rounded-tl-md rounded-bl-md bg-gray-200 p-2 px-4 text-[18px]"
                align="center"
              >
                +998
              </Flex>
              <Input
                type="number"
                className="rounded-tl-none rounded-bl-none border-2 border-gray-200 text-2xl focus:border-green-700 focus:shadow-none"
                placeholder="Telefon raqam"
              />
            </Flex>
          </Flex>

          <Button className="bg-primary border-primary w-full border-none py-6 text-2xl text-white hover:border hover:bg-green-900">
            Yuborish
          </Button>
        </Flex>
      </Flex>
      <Flex
        id="Form"
        className="bg-[url('/images/form-bg-3.png')] bg-cover px-16 text-2xl max-sm:px-0"
      >
        <Flex
          className="w-full px-14 py-16 max-sm:hidden"
          justify="center"
          align="end"
        >
          1
        </Flex>
        <Flex
          className="my-[100px] rounded-2xl bg-white p-14"
          align="center"
          vertical
          gap={40}
        >
          <img width={200} src="/public/images/full-logo-dark.svg" alt="" />
          <p className="text-primary text-2xl">
            Be’pul konsultatsiya uchun ma’lumotlaringizni qoldiring
          </p>

          <Flex vertical gap={20} className="w-full">
            <Input
              className="w-full border-2 border-gray-200 text-2xl focus:border-green-700 focus:shadow-none"
              placeholder="Ism"
            />
            <Flex className="w-full">
              <Flex
                className="text-primary rounded-tl-md rounded-bl-md bg-gray-200 p-2 px-4 text-[18px]"
                align="center"
              >
                +998
              </Flex>
              <Input
                type="number"
                className="rounded-tl-none rounded-bl-none border-2 border-gray-200 text-2xl focus:border-green-700 focus:shadow-none"
                placeholder="Telefon raqam"
              />
            </Flex>
          </Flex>

          <Button className="bg-primary border-primary w-full border-none py-6 text-2xl text-white hover:border hover:bg-green-900">
            Yuborish
          </Button>
        </Flex>
      </Flex>
      <Flex
        id="Form"
        className="bg-[url('/images/form-bg-2.png')] bg-cover px-16 text-2xl max-sm:px-0"
      >
        <Flex
          className="w-full px-14 py-16 max-sm:hidden"
          justify="center"
          align="end"
        >
          1
        </Flex>
        <Flex className="px-14 py-[200px]" align="center" vertical gap={50}>
          <img width={200} src="/public/images/white-full-logo.svg" alt="" />
          <p className="text-2xl text-white">
            Be’pul konsultatsiya uchun ma’lumotlaringizni qoldiring
          </p>

          <Flex vertical gap={20} className="w-full">
            <Input
              className="w-full border-2 border-transparent text-2xl focus:border-green-700 focus:shadow-none"
              placeholder="Ism"
            />
            <Flex className="w-full">
              <Flex
                className="text-primary rounded-tl-md rounded-bl-md bg-gray-200 p-2 px-4 text-[18px]"
                align="center"
              >
                +998
              </Flex>
              <Input
                type="number"
                className="rounded-tl-none rounded-bl-none border-2 border-transparent text-2xl focus:border-green-700 focus:shadow-none"
                placeholder="Telefon raqam"
              />
            </Flex>
          </Flex>

          <Button className="bg-primary w-full rounded-none border-none py-6 text-2xl text-white hover:bg-green-900">
            Yuborish
          </Button>
        </Flex>
      </Flex>
      <Flex id="Location" className="relative">
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
    </div>
  );
}

export default FormSection;
