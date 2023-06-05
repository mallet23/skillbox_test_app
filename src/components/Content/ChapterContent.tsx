import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

import { useChapterQuery, useTabsQuery } from "../../api";

const ChapterContent: React.FC = () => {
  const { chapterId } = useParams();
  const { data: tabs } = useTabsQuery();
  const { data: chapter, isFetching } = useChapterQuery(chapterId);
  const title = useMemo(
    () => tabs?.find((tab) => tab.pageId === chapterId)?.title,
    [tabs, chapterId],
  );

  if (isFetching) {
    return "Loading...";
  }

  if (!chapter) {
    return "No Content...";
  }

  return (
    <div>
      <h1>{title}</h1>
      <div>{chapter.content}</div>
    </div>
  );
};

const ComponentWrapper = React.memo(ChapterContent);

export { ComponentWrapper as ChapterContent };
