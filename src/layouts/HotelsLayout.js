import React from "react";
import { Outlet } from "react-router-dom";

const HotelsLayout = () => {
  return (
    <div className="hotels-bg">
      <Outlet />
    </div>
  );
};

export default HotelsLayout;
