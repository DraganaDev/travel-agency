import RootLayout from "./components/layouts/RootLayout";
import HotelsLayout from "./components/layouts/HotelsLayout";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Hotels from "./components/pages/Hotels";
import Hotel from "./components/pages/Hotel";
import Destinations from "./components/pages/Destinations";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="destinations" element={<Destinations />} />
      <Route path="hotels" element={<HotelsLayout />}>
        <Route index element={<Hotels />} />
        <Route path=":name" element={<Hotel />} />
      </Route>

      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
