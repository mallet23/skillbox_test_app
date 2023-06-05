import React from "react";
import "./ASide.css";
import { TabList } from "./TabList";

const ASide: React.FC = () => {
  return (
    <div className="aside">
      <TabList />
    </div>
  );
};

const ComponentWrapper = React.memo(ASide);

export { ComponentWrapper as ASide };
