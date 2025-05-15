import { App as AntdApp } from 'antd';
import AntProvider from './theme/ant-provider';
import { Route, Routes } from 'react-router-dom';
import Attandence from './pages/attandence/attandence';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AntProvider>
      <AntdApp>
        <Routes>
          <Route path="/" element={<Attandence />} />
        </Routes>
      </AntdApp>
    </AntProvider>
  );
}
