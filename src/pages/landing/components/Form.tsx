import axios from 'axios';
import { Button, Flex, Form, Input, Modal } from 'antd';
import { House } from '../../../assets/svg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';

function FormSection() {
  const { t } = useTranslation();
  const [formattedPhone, setFormattedPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 9);
    const parts = [];
    if (cleaned.length > 0) parts.push(cleaned.slice(0, 2));
    if (cleaned.length > 2) parts.push(cleaned.slice(2, 5));
    if (cleaned.length > 5) parts.push(cleaned.slice(5, 7));
    if (cleaned.length > 7) parts.push(cleaned.slice(7, 9));
    return parts.join('-');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    try {
      axios
        .post(
          'https://service.app.uysot.uz/v1/external-source',
          {
            phoneNumber: `+998${formattedPhone.replace(/\D/g, '')}`,
            name: values.name,
          },
          {
            headers: {
              'X-Auth':
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOTIiLCJleHAiOjY5OTM3MDc0MDJ9.skQsm_7dkoKi3QCZze0k1-NG_8g8_67KIpa96sD1nqw',
            },
          },
        )
        .then(() => {
          setIsModalOpen(true);
          form.resetFields(); // <-- this clears the inputs
          setFormattedPhone('');
        });
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
        <Form form={form} onFinish={handleSubmit}>
          <Flex
            className="my-[100px] rounded-2xl bg-white p-14 max-sm:p-6"
            align="center"
            vertical
            gap={40}
          >
            <img width={200} src="/images/full-logo-dark.svg" alt="" />
            <p
              className="text-2xl text-gray-400"
              dangerouslySetInnerHTML={{ __html: t('form.description') }}
            />

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
                    value={formattedPhone}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      setFormattedPhone(formatted);
                    }}
                    name="age"
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
          className="bg-primary absolute right-[50%] bottom-6 z-40 translate-x-[50%] rounded-md p-5 text-[18px] text-white max-sm:w-[90%]"
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
      <Modal
        centered
        title={<p className="text-transparent">ae</p>}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={() => <></>}
      >
        <Flex vertical gap={30} align="center">
          <FaRegCircleCheck className="text-primary" size={'50'} />
          <Flex vertical gap={10} align="center">
            <p className="text-primary text-4xl font-medium">Rahmat!</p>
            <p className="text-md text-center font-medium text-gray-400">
              Ma’lumotlaringiz qoldirildi. Siz bilan tez orada mutaxassislarimiz
              bog‘lanishadi.
            </p>
          </Flex>
        </Flex>
      </Modal>
    </div>
  );
}

export default FormSection;
