import React from "react";

import { ASide } from "./ASide";

import "./Body.css";
import { Outlet } from "react-router-dom";

const Body: React.FC = () => {
  return (
    <div className="body">
      <ASide />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const ComponentWrapper = React.memo(Body);

export { ComponentWrapper as Body };
