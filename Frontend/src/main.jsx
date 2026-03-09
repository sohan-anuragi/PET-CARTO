import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AppLayout from "./Routes/AppLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import { BlogProvider } from "./Pages/Blog/BlogStore.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Faqs from "./Pages/Faqs/Faqs.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import SignupPage from "./Pages/LoginPage/SignupPage.jsx";
import ForgetPage from "./Pages/LoginPage/ForgetPage.jsx";
import Wishlist from "./Pages/WishList/WishList.jsx";
import ProductDetails from "./Pages/ProducDetails/ProductDetails.jsx";
import AboutUs2 from "./Pages/AboutUs2/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs2 /> },
      {
        path: "/blog",
        element: (
          <BlogProvider>
            <Blog />
          </BlogProvider>
        ),
      },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/faqs", element: <Faqs /> },
      { path: "/sign-up", element: <SignupPage /> },
      { path: "/forget", element: <ForgetPage /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/shop/simple-product", element: <ProductDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
