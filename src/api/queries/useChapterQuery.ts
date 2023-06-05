import { useQuery } from "@tanstack/react-query";

import { api } from "../api";
import { ChapterInfo } from "../../models";

const request = (chapterId?: string) => {
  return api.get<ChapterInfo>(`/chapters/${chapterId}`);
};

export const useChapterQuery = (chapterId?: string) => {
  return useQuery<ChapterInfo>(
    ["chapters", chapterId],
    () => request(chapterId).then((res) => res.data),
    { enabled: !!chapterId },
  );
};
