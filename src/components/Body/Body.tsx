import React from "react";

import { ASide } from "./ASide";
import { Content } from "./Content";

import "./Body.css";

const Body: React.FC = () => {
  return (
    <div className="body">
      <ASide />
      <Content />
    </div>
  );
};

const ComponentWrapper = React.memo(Body);

export { ComponentWrapper as Body };
