import React from "react";
import { FaReact } from "react-icons/fa";

import { AccountButton } from "./Account";

import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <a href="/">
        <FaReact className="app_icon" />
      </a>
      <AccountButton />
    </div>
  );
};

const ComponentWrapper = React.memo(Header);
export { ComponentWrapper as Header };
