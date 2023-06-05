import { useQuery } from "@tanstack/react-query";

import { api } from "../api";
import { Tab } from "../../models";

const request = () => {
  return api.get<Tab[]>("/tabs");
};

export const useTabsQuery = () => {
  return useQuery<Tab[]>(["tabs"], () => request().then((res) => res.data));
};
