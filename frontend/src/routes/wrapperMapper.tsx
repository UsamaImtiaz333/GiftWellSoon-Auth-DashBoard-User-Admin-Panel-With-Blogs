import type { ReactElement } from "react";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import type { RouteType } from "../types/routeType";

const wrappers: Record<RouteType, (el: ReactElement) => ReactElement> = {
  public: (el) => <PublicRoute>{el}</PublicRoute>,
  protected: (el) => <ProtectedRoute>{el}</ProtectedRoute>,
};

export const wrapElement = (type: RouteType, element: ReactElement) => {
  return wrappers[type](element);
};
