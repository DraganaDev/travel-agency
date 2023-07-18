import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HotelsLayout from "../layouts/HotelsLayout";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import Hotels from "../pages/Hotels";
import Hotel from "../pages/Hotel";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "hotels",
        element: <HotelsLayout />,
        children: [
          { index: true, element: <Hotels /> },
          { path: ":name", element: <Hotel /> },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
