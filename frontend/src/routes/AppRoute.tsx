import { Routes, Route } from "react-router-dom";
import { routes } from "./routesConfig";
import { wrapElement } from "./wrapperMapper";
import type { AppRoute } from "../types/routeType";

function renderRoute(route: AppRoute, key: number) {
  if (route.children) {
    return (
      <Route
        key={key}
        path={route.path}
        element={wrapElement(route.type, route.element)}
      >
        {route.children.map((child, i) => renderRoute(child, i))}
      </Route>
    );
  }

  return (
    <Route
      key={key}
      index={route.index}
      path={route.path}
      element={wrapElement(route.type, route.element)}
    />
  );
}

export default function AppRoutes() {
  return <Routes>{routes.map((r, i) => renderRoute(r, i))}</Routes>;
}
