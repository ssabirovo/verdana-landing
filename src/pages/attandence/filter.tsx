import { FilterOutlined } from '@ant-design/icons';
import { Button, DatePicker, Dropdown, Flex, Select, Form } from 'antd';
import { useBoolean } from '../../hooks/use-boolean';
import { lateTypeOptions } from '../../utils/constants';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

interface iFilter {
  handleApplyFilters: (e: string) => void;
}

const Filter = ({ handleApplyFilters }: iFilter) => {
  const isOpen = useBoolean();
  const isManual = useBoolean(false);
  const [form] = Form.useForm();

  const dropdownContent = (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleApplyFilters}
      initialValues={{
        clearCache: false,
        showResignEmployee: false,
        date: dayjs(),
      }}
    >
      <Flex
        vertical
        gap={10}
        className="rounded-md border border-gray-300 bg-white p-4 shadow"
      >
        <Flex gap={10} vertical>
          <Form.Item name="filterType">
            <Select
              popupMatchSelectWidth={false}
              style={{ width: '300px', marginBottom: 0 }}
              options={lateTypeOptions}
              allowClear
              defaultValue={lateTypeOptions[0].value}
              onChange={(e) => {
                console.log(e);

                isManual.setValue(e === 'MANUAL');
              }}
            />
          </Form.Item>
          {isManual.value && (
            <Form.Item name="date">
              <RangePicker
                className="w-full"
                showTime={false}
                format="YYYY-MM-DD"
                onCalendarChange={(e) => {
                  console.log('value e', e);
                }}
              />
            </Form.Item>
          )}
        </Flex>
        <Flex>
          <Button className="w-full" htmlType="submit" type="primary">
            Apply filter
          </Button>
        </Flex>
      </Flex>
    </Form>
  );

  return (
    <Dropdown
      popupRender={() => dropdownContent}
      trigger={['click']}
      placement="bottomRight"
      open={isOpen.value}
      onOpenChange={() => isOpen.onToggle()}
    >
      <Button icon={<FilterOutlined />} type="primary">
        Filter
      </Button>
    </Dropdown>
  );
};

export default Filter;
