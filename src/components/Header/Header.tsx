import React from "react";

const Header: React.FC = () => {
  return <div>Header</div>;
};

const ComponentWrapper = React.memo(Header);

export { ComponentWrapper as Header };
