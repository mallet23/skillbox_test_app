import React, { useCallback } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useTabsQuery } from "../../../../api";
import { Tab } from "./Tab";

const TabList: React.FC = () => {
  const { data: chapters, isFetching } = useTabsQuery();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTabClick = useCallback((path: string) => {}, []);

  if (isFetching) {
    return <span>Loading...</span>;
  }

  if (!chapters) {
    return <span>No tabs...</span>;
  }

  return (
    <ul>
      <Tab path={"intro"} isActive={"intro" === pathname} onClick={navigate}>
        Описание
      </Tab>
      {chapters.map((chapter) => (
        <Tab
          key={chapter.id}
          path={`chapters/${chapter.pageId}`}
          isActive={chapter.id === pathname}
          onClick={navigate}
        >
          {chapter.title}
        </Tab>
      ))}
    </ul>
  );
};

const ComponentWrapper = React.memo(TabList);

export { ComponentWrapper as TabList };
