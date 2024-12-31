import { BrowserRouter, createBrowserRouter, RouterProvider  } from 'react-router-dom';
import About from '../pages/About/About';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';

const Router = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />,  
          children: [
            {
              path: "/",
              element: <Home />,  
            },
            {
              path: "/about",
              element: <About />,
            },
          ],
        },
      ]);

    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;