import React from "react";
import { ConfigProvider } from "antd";

const CustomAntdStyles = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        colorText: '#ffffff'
      },
      components: {
        Button: {
          borderRadius: 8,
          fontSize: 18,
          defaultHoverColor: '#ffffff',
          defaultHoverBorderColor: 'rgb(150, 150, 150)',
          // defaultShadow: '0 2px 0 rgba(255, 255, 255, 0.9)',
        },
        Notification: {
          colorBgElevated: "#000000",
          borderRadiusLG: 8,
          width: 300,
        }
      }
    }}
  >
    {children}
  </ConfigProvider>
);

export default CustomAntdStyles;
