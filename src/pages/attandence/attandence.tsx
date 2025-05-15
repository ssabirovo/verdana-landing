import {
  ClockCircleOutlined,
  CoffeeOutlined,
  LineChartOutlined,
  LogoutOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { Flex } from 'antd';
import Filter from './filter';
import { useEffect, useState } from 'react';
import request from '../../services/api';
import { get } from 'lodash';
import cls from 'classnames';
import UniversalCollapse from '../../components/universal-collapse/univesalCollapse';
import { useSearchParams } from 'react-router-dom';
import { getCurrentMonthRange } from '../../utils/dateHelpers';

interface iDate {
  fromDate: string;
  toDate: string;
}

const Attandence = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [{ toDate, fromDate }, setPeriod] = useState<iDate>(
    getCurrentMonthRange(),
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleApplyFilters = (values: any) => {
    console.log(values);

    const today = new Date();
    let from: Date;
    let to: Date;

    const getStartOfWeek = (date: Date) => {
      const d = new Date(date);
      const day = d.getDay();
      const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday as start of week
      return new Date(d.setDate(diff));
    };

    const getEndOfWeek = (startOfWeek: Date) => {
      const end = new Date(startOfWeek);
      end.setDate(startOfWeek.getDate() + 6);
      return end;
    };

    switch (values.filterType) {
      case 'TODAY':
        from = to = today;
        break;
      case 'CURRENT_WEEK':
        from = getStartOfWeek(today);
        to = getEndOfWeek(from);
        break;
      case 'LAST_WEEK': {
        const lastWeekStart = getStartOfWeek(
          new Date(today.setDate(today.getDate() - 7)),
        );
        from = lastWeekStart;
        to = getEndOfWeek(lastWeekStart);
        break;
      }
      case 'CURRENT_MONTH':
        from = new Date(today.getFullYear(), today.getMonth(), 1);
        to = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case 'LAST_MONTH':
        from = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        to = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      case 'MANUAL':
        from = dayjs(values.date[0]).add(1, 'day').startOf('day').toDate();
        to = dayjs(values.date[1]).endOf('day').toDate();
        break;
      default:
        return;
    }

    const formatDate = (date: Date) => date.toISOString().split('T')[0];

    setPeriod({
      fromDate: formatDate(from),
      toDate: formatDate(to),
    });
  };

  const getData = () => {
    request
      .get(
        `turniket/v1/integration/bitrix/attendance-dashboard?fromDate=${fromDate}&toDate=${toDate}`,
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error('GET Error:', error);
      });
  };

  useEffect(() => {
    getData();
  }, [toDate, fromDate]);

  return (
    <div className="p-8">
      <Flex justify="space-between">
        <p className="mb-8 text-xl font-bold text-gray-600">
          Xodimlar Davomat Paneli
        </p>
        <Filter handleApplyFilters={handleApplyFilters} />
      </Flex>
      <Flex className="mb-8" justify="space-between" gap={20}>
        <Flex
          vertical
          align="center"
          gap={10}
          className="relative w-full overflow-hidden rounded-md border border-gray-300 py-8"
        >
          <p
            className={cls(
              get(data, 'disciplinePercent') > 95
                ? 'text-primary'
                : get(data, 'disciplinePercent') > 80
                  ? 'text-orange-400'
                  : 'text-red-500',
              'text-3xl font-bold text-orange-400',
            )}
          >
            {get(data, 'disciplinePercent')}
          </p>{' '}
          <Flex gap={10} className="text-gray-600">
            <LineChartOutlined
              className={cls(
                get(data, 'disciplinePercent') > 95
                  ? 'text-primary'
                  : get(data, 'disciplinePercent') > 80
                    ? 'text-orange-400'
                    : 'text-red-500',
                'text-xl text-orange-400',
              )}
            />

            <p>Umumiy intizom</p>
          </Flex>
          <div className="absolute bottom-0 w-full bg-gray-200">
            <div
              style={{ width: `${get(data, 'disciplinePercent')}%` }}
              className={cls(
                get(data, 'disciplinePercent') > 95
                  ? 'bg-primary'
                  : get(data, 'disciplinePercent') > 80
                    ? 'bg-orange-400'
                    : 'bg-red-500',
                `py-1`,
              )}
            ></div>
          </div>
        </Flex>
        <Flex
          vertical
          align="center"
          gap={10}
          className="w-full rounded-md border border-gray-300 py-8"
        >
          <p className="text-primary text-3xl font-bold">
            {get(data, 'lateArriveCount')}
          </p>{' '}
          <Flex gap={10} className="text-gray-600">
            <ClockCircleOutlined className="text-primary text-xl" />
            <p>Kechikishlar soni</p>
          </Flex>
        </Flex>
        <Flex
          vertical
          align="center"
          gap={10}
          className="w-full rounded-md border border-gray-300 py-8"
        >
          <p className="text-primary text-3xl font-bold">
            {get(data, 'earlyLeaveCount')}
          </p>{' '}
          <Flex gap={10} className="text-gray-600">
            <LogoutOutlined className="text-primary text-xl" />
            <p>Erta ketishlar</p>
          </Flex>
        </Flex>
        <Flex
          vertical
          align="center"
          gap={10}
          className="w-full rounded-md border border-gray-300 py-8"
        >
          <p className="text-primary text-3xl font-bold">
            {get(data, 'overBreakCount')}
          </p>
          <Flex gap={10} className="text-gray-600">
            <CoffeeOutlined className="text-primary text-xl" />
            <p>Uzoq tanaffuslar</p>
          </Flex>
        </Flex>
        <Flex
          vertical
          align="center"
          gap={10}
          className="w-full rounded-md border border-gray-300 py-8"
        >
          <p className="text-primary text-3xl font-bold">
            {get(data, 'absenceCount')}
          </p>
          <Flex gap={10} className="text-gray-600">
            <MinusCircleOutlined className="text-primary text-xl" />
            <p>Kelmaganlar</p>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        className="sticky top-0 z-10 rounded-t-2xl border border-gray-300 bg-white py-4"
      >
        <p className="w-[250%] pl-3 text-sm font-bold">Bo'lim</p>
        <p className="w-full text-center text-sm font-bold">Intizomi</p>
        <p className="w-full text-center text-sm font-bold">Kechikishlar</p>
        <p className="w-full text-center text-sm font-bold">Erta ketishlar </p>
        <p className="w-full text-center text-sm font-bold">Uzoq tanaffuslar</p>
        <p className="w-full text-center text-sm font-bold">Kelmaganlar</p>
      </Flex>

      {data && <UniversalCollapse data={data.departmentAttendances} />}
    </div>
  );
};

export default Attandence;
