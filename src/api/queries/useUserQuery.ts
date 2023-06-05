import { useQuery } from "@tanstack/react-query";

import { api } from "../api";
import { User } from "../../models";

const request = (id: string) => {
  return api.get<User>(`/users/${id}`);
};

export const useUserQuery = (id: string) => {
  return useQuery<User>(["user", id], () =>
    request(id).then((res) => res.data),
  );
};
