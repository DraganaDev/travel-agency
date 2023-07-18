import { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="root-layout" onClick={() => setIsVisible(false)}>
      <ScrollToTop />
      <Header isVisible={isVisible} setIsVisible={setIsVisible} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
