import { Collapse, Flex, theme, type CollapseProps } from 'antd';
import type { CSSProperties } from 'react';
import { PlusOutlined } from '@ant-design/icons';

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (
  panelStyle,
) => [
  {
    key: '1',
    label: <p className="text-primary">Bu loyiha qayerda joylashgan?</p>,
    children: (
      <p className="text-gray-500">
        - Verdana turar-joy majmuamiz Mirzo Ulug'bek tumani, Yangi O'zbekiston
        ko'chasida joylashgan, Mo'ljal Tanho zavodi yonida
      </p>
    ),
    style: panelStyle,
  },
  {
    key: '2',
    label: <p className="text-primary">Xonadonlar qachon topshiriladi?</p>,
    children: (
      <p className="text-gray-500">
        - Loyihamiz 2027-yilning, 2-choragida o'z egalariga topshiriladi
      </p>
    ),
    style: panelStyle,
  },
  {
    key: '3',
    label: <p className="text-primary">Bu loyiha qaysi toifaga mansub?</p>,
    children: <p className="text-gray-500">- Premium klass toifasiga mansub</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: (
      <p className="text-primary">
        Ipoteka yoki kredit asosida xarid qilish mumkinmi?
      </p>
    ),
    children: (
      <p className="text-gray-500">
        - Yo'q, bizda kredit yoki ipoteka asosida xonadonlar sotilmaydi.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: '5',
    label: <p className="text-primary">Qanday to'lov usullari mavjud?</p>,
    children: (
      <p className="text-gray-500">
        - Boshlang'ich uchun 40, 50, 60%, qolgan qismi 36 oylik muddatli to'lov
        <br />
        - Xonadonning umumiy 100% pulini 4 oydan 6 oygacha bo'lib to'lash <br />
        - Oylik to'lovlarsiz, ya'ni 70% boshlang'ich, qolgan 30% ni esa
        xonadonlar bitgandan keyin to'lash
      </p>
    ),
    style: panelStyle,
  },
  {
    key: '6',
    label: <p className="text-primary">Xonadonlarning narxi qancha?</p>,
    children: (
      <p className="text-gray-500">
        - Barcha xonadonlarning narxi individual hisoblangani uchun, faqatgina
        ofisga tashrif buyurib bilish mumkin
      </p>
    ),
    style: panelStyle,
  },
];

const Faq = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <div className="px-16 py-[100px] max-sm:px-6">
      <p className="text-primary py-7 text-4xl">Eng ko'p so'ralgan savollar</p>
      <Collapse
        className="text-[18px] max-sm:text-[16px]"
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <Flex justify="center" align="center">
            <PlusOutlined
              rotate={isActive ? 45 : 0}
              style={{
                fontSize: '24px',
                color: 'gray',
              }}
            />
          </Flex>
        )}
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
      />
    </div>
  );
};

export default Faq;
