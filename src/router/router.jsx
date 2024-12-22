import MainLayout from '@/Layout/MainLayout';
import Homepage from '@/pages/Homepage/Homepage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
