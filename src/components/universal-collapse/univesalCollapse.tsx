import { CaretRightOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { useState } from 'react';
import cls from 'classnames';

export interface commons {
  absenceCount: number;
  disciplinePercent: number;
  earlyLeaveCount: number;
  lateArriveCount: number;
  maxViolationCount: number;
  overBreakCount: number;
}

export interface user {
  name: string;
  allowedIgnoreCount: number;
  blockedOnFaceId: boolean;
  departmentIds: [23];
  enabled: boolean;
  fio: string;
  id: 48729;
  lastName: string;
  patron: string;
  photo: string;
  resigned: boolean;
}

export interface child extends commons {
  name: string;
  children?: child[];
  employees: employee[];
}

export interface employee extends commons {
  user: user;
}

type Props = {
  data: child[];
  paddingLeft?: number;
};

const UniversalCollapse = ({ data, paddingLeft = 0 }: Props) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (key: number) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {data.map(
        (
          {
            name,
            absenceCount,
            disciplinePercent,
            earlyLeaveCount,
            lateArriveCount,
            overBreakCount,
            employees,
            children,
          },
          dataIndex,
        ) => (
          <div key={dataIndex}>
            <Flex
              className={`${openItems[dataIndex] && 'bg-white'} cursor-pointer bg-gray-100 pl-3 hover:bg-gray-50`}
              onClick={() => toggleItem(dataIndex)}
            >
              <div className="w-[250%] py-3">
                <div style={{ paddingLeft: paddingLeft + 'px' }}>
                  <CaretRightOutlined
                    className={`${openItems[dataIndex] && 'rotate-90'} mr-4`}
                  />
                  {name}
                </div>
              </div>
              <div className="relative w-full py-3 text-center">
                <p
                  className={cls(
                    disciplinePercent > 95
                      ? 'text-primary'
                      : disciplinePercent > 80
                        ? 'text-orange-400'
                        : 'text-red-500',
                  )}
                >
                  {disciplinePercent}%
                </p>
                <div className="absolute bottom-0 w-full bg-gray-300">
                  <div
                    style={{ width: `${disciplinePercent}%` }}
                    className={cls(
                      disciplinePercent > 95
                        ? 'bg-primary'
                        : disciplinePercent > 80
                          ? 'bg-orange-400'
                          : 'bg-red-500',
                      `py-0.5`,
                    )}
                  ></div>
                </div>
              </div>
              <p className="w-full py-3 text-center">{lateArriveCount}</p>
              <p className="w-full py-3 text-center">{earlyLeaveCount}</p>
              <p className="w-full py-3 text-center">{overBreakCount}</p>
              <p className="w-full py-3 text-center">{absenceCount}</p>
            </Flex>

            <Flex vertical className={`${!openItems[dataIndex] && 'hidden'}`}>
              {children && (
                <UniversalCollapse
                  data={children}
                  paddingLeft={paddingLeft + 20}
                />
              )}

              <p className="mt-8 ml-3 font-bold">{name} xodimlari</p>

              <div className="mb-8">
                {employees &&
                  employees.map(
                    (
                      {
                        user,
                        disciplinePercent,
                        lateArriveCount,
                        earlyLeaveCount,
                        overBreakCount,
                        absenceCount,
                      }: employee,
                      employeeIndex,
                    ) => (
                      <Flex
                        key={employeeIndex}
                        className="cursor-pointer border-b border-b-gray-200 pl-3 hover:bg-gray-50"
                      >
                        <p className="w-[250%] py-3">{user.fio}</p>
                        <div className="relative w-full py-3 text-center">
                          <p
                            className={cls(
                              disciplinePercent > 95
                                ? 'text-primary'
                                : disciplinePercent > 80
                                  ? 'text-orange-400'
                                  : 'text-red-500',
                            )}
                          >
                            {disciplinePercent}%
                          </p>
                          <div className="absolute bottom-0 w-full bg-gray-300">
                            <div
                              style={{ width: `${disciplinePercent}%` }}
                              className={cls(
                                disciplinePercent > 95
                                  ? 'bg-primary'
                                  : disciplinePercent > 80
                                    ? 'bg-orange-400'
                                    : 'bg-red-500',
                                `py-0.5`,
                              )}
                            ></div>
                          </div>
                        </div>
                        <p className="w-full py-3 text-center">
                          {lateArriveCount}
                        </p>
                        <p className="w-full py-3 text-center">
                          {earlyLeaveCount}
                        </p>
                        <p className="w-full py-3 text-center">
                          {overBreakCount}
                        </p>
                        <p className="w-full py-3 text-center">
                          {absenceCount}
                        </p>
                      </Flex>
                    ),
                  )}
              </div>
            </Flex>
          </div>
        ),
      )}
    </>
  );
};

export default UniversalCollapse;
