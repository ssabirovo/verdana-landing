import { App as AntdApp } from 'antd';
import AntProvider from './theme/ant-provider';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AntProvider>
      <AntdApp>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </AntdApp>
    </AntProvider>
  );
}
