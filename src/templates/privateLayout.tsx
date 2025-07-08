import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";

import React from "react";

const PrivateRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const accessToken = getLocalStorage("accessToken");
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
