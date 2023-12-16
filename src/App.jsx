import PhotoContextProvider from './context/PhotoContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Item from './components/Item';
import Search from './components/Search';
import PageLayout from './components/PageLayout';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <Item searchTerm='mountain' />,
        },
        {
          path: '/beach',
          element: <Item searchTerm='beach' />,
        },
        {
          path: '/bird',
          element: <Item searchTerm='bird' />,
        },
        {
          path: '/food',
          element: <Item searchTerm='food' />,
        },
        {
          path: '/search/:id',
          element: <Search />,
        },
      ],
    },
  ]);

  return (
    <PhotoContextProvider>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </PhotoContextProvider>
  );
}
