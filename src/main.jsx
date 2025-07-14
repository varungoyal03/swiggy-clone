import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Body from "./components/body.jsx";
import Error from "./components/Error.jsx";
import Menu from './components/Menu.jsx';
import Cart from "./components/Cart.jsx";
// import Grocery from "./components/Grocery.jsx";

const Grocery=lazy(()=>import("./components/Grocery"))  // lazy load 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      { path: "/", element: <Body /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },{ path: "grocery", element:<Suspense fallback={<div>Loading...</div>} ><Grocery/></Suspense>  },
      { path: '/restaurants/:resId', element:<Menu/>},
        { path: "/cart",   element: <Cart/> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
