import React from "react";

import "./AccountButton.css";
import { useUserQuery } from "../../../api";

const testUserId = "1";

export const AccountInfo: React.FC = () => {
  const {
    data: user = { id: "1", email: "email", name: "Artur" },
    isFetching,
  } = useUserQuery(testUserId);

  if (isFetching) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return <span>No User data</span>;
  }

  return (
    <div>
      <div>User id: {user.id}</div>
      <div>User name: {user.name}</div>
      <div>User email: {user.email}</div>
    </div>
  );
};
