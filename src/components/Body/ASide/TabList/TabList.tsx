import React from "react";

import { Location, useLocation, useNavigate } from "react-router-dom";

import { useTabsQuery } from "../../../../api";
import { Tab } from "./Tab";

const TabList: React.FC = () => {
  const { data: chapters, isFetching } = useTabsQuery();
  const location = useLocation();
  const navigate = useNavigate();

  if (isFetching) {
    return <span>Loading...</span>;
  }

  if (!chapters) {
    return <span>No tabs...</span>;
  }

  return (
    <ul>
      <Tab
        path={"intro"}
        isActive={isTabSelected(location, "intro")}
        onClick={navigate}
      >
        Описание
      </Tab>
      {chapters.map((chapter) => {
        const path = `chapters/${chapter.pageId}`;

        return (
          <Tab
            key={path}
            path={path}
            isActive={isTabSelected(location, path)}
            onClick={navigate}
          >
            {chapter.title}
          </Tab>
        );
      })}
    </ul>
  );
};

const isTabSelected = (location: Location, tabId: string) =>
  location.pathname.startsWith(`/${tabId}`);

const ComponentWrapper = React.memo(TabList);
export { ComponentWrapper as TabList };
