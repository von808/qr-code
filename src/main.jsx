import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router';
import { BrowserRouter } from 'react-router';

import './main.css';
import { Layout } from './/Layout';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
