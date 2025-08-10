import { ConfigProvider, ThemeConfig } from 'antd';
import type { AppProps } from 'next/app';
import React from 'react';


const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
  },
};
const App = ({Component, pageProps}: AppProps) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;