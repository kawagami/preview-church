import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';   // ⬅️ 新增
import './index.css';
import router from './app/routes';                   // ⬅️ 新增，路由定義檔

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />               {/* ⬅️ 改這裡 */}
  </StrictMode>,
);
