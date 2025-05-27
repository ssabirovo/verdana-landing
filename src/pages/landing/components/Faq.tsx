import { Collapse, Flex, theme, type CollapseProps } from 'antd';
import type { CSSProperties } from 'react';
import { PlusOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (
  panelStyle,
) => [
  {
    key: '1',
    label: <p className="text-primary">This is panel header 1</p>,
    children: <p className="text-gray-500">{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p className="text-primary">This is panel header 2</p>,
    children: <p className="text-gray-500">{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p className="text-primary">This is panel header 3</p>,
    children: <p className="text-gray-500">{text}</p>,
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
      <Collapse
        className="text-[18px] max-sm:text-[16px]"
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <Flex justify='center' align='center'>
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
