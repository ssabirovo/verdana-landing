import { Collapse, Flex, theme, type CollapseProps } from 'antd';
import type { CSSProperties } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const getItems: (panelStyle: CSSProperties, t: (key: string) => string) => CollapseProps['items'] = (
  panelStyle,
  t,
) => [
  {
    key: '1',
    label: <p className="text-primary">{t('faq.q1')}</p>,
    children: <p className="text-gray-500">{t('faq.a1')}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p className="text-primary">{t('faq.q2')}</p>,
    children: <p className="text-gray-500">{t('faq.a2')}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p className="text-primary">{t('faq.q3')}</p>,
    children: <p className="text-gray-500">{t('faq.a3')}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <p className="text-primary">{t('faq.q4')}</p>,
    children: <p className="text-gray-500">{t('faq.a4')}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <p className="text-primary">{t('faq.q5')}</p>,
    children: (
      <p className="text-gray-500" style={{ whiteSpace: 'pre-line' }}>
        {t('faq.a5')}
      </p>
    ),
    style: panelStyle,
  },
  {
    key: '6',
    label: <p className="text-primary">{t('faq.q6')}</p>,
    children: <p className="text-gray-500">{t('faq.a6')}</p>,
    style: panelStyle,
  },
];

const Faq = () => {
  const { token } = theme.useToken();
  const { t } = useTranslation();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <div id="Faq" className="px-16 py-[100px] max-sm:px-6">
      <Flex
        className="text-primary mb-16 text-4xl"
        vertical
        justify="center"
        align="center"
      >
        <p className="text-gray-400">{t('faq.topLabel')}</p>
        <b>{t('faq.bottomLabel')}</b>
      </Flex>
      <Flex align='center' justify="center">
        <Collapse
          className="w-[65%] max-sm:w-full text-[18px] max-sm:text-[16px]"
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
          items={getItems(panelStyle, t)}
        />
      </Flex>
    </div>
  );
};

export default Faq;
