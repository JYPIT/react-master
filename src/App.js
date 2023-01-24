import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DarkModeProvider from './context/DarkModeProvider';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Todo from './pages/Todo';
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <p>Not Found:(</p>,
    },
    {
      path: '/todo',
      element: <Todo />,
      errorElement: <p>Not Found:(</p>,
    },
    {
      path: '/counter',
      element: <Counter />,
      errorElement: <p>Not Found:(</p>,
    },
    {
      path: '/product',
      element: <Product />,
      errorElement: <p>Not Found:(</p>,
    },
    {
      path: '/product/:productId',
      element: <ProductDetail />,
      errorElement: <p>Not Found:(</p>,
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}
