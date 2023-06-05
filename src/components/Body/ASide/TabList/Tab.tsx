import React, { useCallback } from "react";
import "./Tab.css";
import clsx from "clsx";

interface TabProps {
  children: React.ReactNode;
  path: string;
  isActive: boolean;
  onClick: (path: string) => void;
}

const Tab: React.FC<TabProps> = ({ path, isActive, children, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(path);
  }, [path]);

  return (
    <li
      className={clsx("tab", isActive ? "tab_selected" : undefined)}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};

const ComponentWrapper = React.memo(Tab);

export { ComponentWrapper as Tab };
