import React from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

const AntdProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2C6466",
          colorInfo: "#2C6466",
          colorSuccess: "#2C6466",
          colorLink: "#2C6466",
          borderRadius: 6,
        },
      }}
    >
      <StyleProvider hashPriority="low">{children}</StyleProvider>
    </ConfigProvider>
  );
};

export default React.memo(AntdProvider);
