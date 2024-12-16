import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/hero/hero';
import About from './components/About/About';
import Blog from './components/Blogs/Blog';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import Errors from './components/Errors/Errors';

function App() {
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <Hero />,
      errorElement: <Errors />,
    },
    {
      path: "about",
      element: <About />,
      errorElement: <Errors />,
    },
    {
      path: "contact",
      element: <Contact />,
      errorElement: <Errors />,
    },
    {
      path: "shop",
      element: <Shop />,
      errorElement: <Errors />,
    },
    {
      path: "blog",
      element: <Blog />,
      errorElement: <Errors />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
