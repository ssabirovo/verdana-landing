import axios from 'axios';
import { Button, Flex, Form, Input } from 'antd';
import { House } from '../../../assets/svg';
import { useTranslation } from 'react-i18next';

function FormSection() {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post(
        'https://service.app.uysot.uz/v1/external-source',
        {
          phoneNumber: `+998${values.age}`,
          name: values.name,
          tagList: ['#website', 'landing-page'],
          houseName: 'VERDANA',
          esType: 'WEBSITE',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Auth':
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOTIiLCJleHAiOjY5OTM3MDc0MDJ9.skQsm_7dkoKi3QCZze0k1-NG_8g8_67KIpa96sD1nqw', // Replace with your actual token
          },
        },
      );
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="w-">
      <Flex
        id="Form"
        className="bg-[url('/images/form-bg-3.png')] bg-cover px-16 text-2xl max-sm:px-6"
      >
        <Flex
          className="w-full px-14 py-16 max-sm:hidden"
          justify="center"
          align="end"
        >
          1
        </Flex>
        <Form onFinish={handleSubmit}>
          <Flex
            className="my-[100px] rounded-2xl bg-white p-14 max-sm:p-6"
            align="center"
            vertical
            gap={40}
          >
            <img width={200} src="/images/full-logo-dark.svg" alt="" />
            <p className="text-2xl text-gray-400" dangerouslySetInnerHTML={{ __html: t('form.description') }} />

            <Flex vertical gap={20} className="w-full">
              <Form.Item name={'name'} className="m-0">
                <Input
                  className="w-full border-2 border-gray-200 p-2 px-4 text-2xl text-[18px] focus:border-green-700 focus:shadow-none"
                  placeholder={t('form.namePlaceholder')}
                />
              </Form.Item>
              <Form.Item name={'age'} className="m-0">
                <Flex className="w-full">
                  <Flex
                    className="text-primary rounded-tl-md rounded-bl-md bg-gray-200 p-2 px-4 text-[18px]"
                    align="center"
                  >
                    +998
                  </Flex>
                  <Input
                    type="number"
                    className="rounded-tl-none rounded-bl-none border-2 border-gray-200 p-2 px-4 text-2xl text-[18px] focus:border-green-700 focus:shadow-none"
                    placeholder={t('form.phonePlaceholder')}
                  />
                </Flex>
              </Form.Item>
            </Flex>

            <Button
              htmlType="submit"
              className="bg-primary border-primary w-full border-none p-2 px-4 py-6 text-2xl text-[18px] text-white hover:border hover:bg-green-900"
            >
              {t('form.submit')}
            </Button>
          </Flex>
        </Form>
      </Flex>

      <Flex id="Location" className="relative">
        <Flex
          vertical
          className="bg-primary absolute right-[50%] bottom-6 z-40 translate-x-[50%] p-5 text-[18px] text-white max-sm:w-[90%] rounded-md"
          gap={20}
        >
          <Flex align="end" gap={10}>
            <House />
            <p className="leading-none">{t('form.addressTitle')}</p>
          </Flex>
          <p>{t('form.address')}</p>
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
