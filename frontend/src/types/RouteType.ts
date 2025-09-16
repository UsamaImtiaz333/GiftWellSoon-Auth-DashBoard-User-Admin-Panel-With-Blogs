import type { ReactElement } from "react";

export type RouteType = "public" | "protected";

export interface AppRoute {
  path?: string;
  element: ReactElement;
  type: RouteType;
  index?: boolean;
  children?: AppRoute[];
}
