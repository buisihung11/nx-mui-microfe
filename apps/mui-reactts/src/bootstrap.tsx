import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const BootStrap = () => (
  <StrictMode>
    {/* Basename will help us when we run app indepdently so that it wont break current path */}
    <BrowserRouter basename="admin/mui-reactts">
      <App />
    </BrowserRouter>
  </StrictMode>
);

root.render(<BootStrap />);
