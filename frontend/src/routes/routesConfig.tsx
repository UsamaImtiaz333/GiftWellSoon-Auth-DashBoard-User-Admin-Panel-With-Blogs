import Home from "@/Pages/Home";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import Supports from "@/Pages/Supports";
import DashboardLayout from "@/Layout/MainLayout";
import DashBoardHome from "@/Pages/Dashboard/DashBoardHome";
import Blogs from "@/Pages/Dashboard/Blogs";
import Friends from "@/Pages/Dashboard/Friends";
import Explore from "@/Pages/Dashboard/Explore";
import Search from "@/Pages/Dashboard/Search";
import User from "@/Pages/Dashboard/User";
import UserDetail from "@/Pages/Dashboard/UserDetail";

import type { AppRoute } from "../types/routeType";

export const routes: AppRoute[] = [
  { path: "/", element: <Home />, type: "public" },
  { path: "/login", element: <LoginForm />, type: "public" },
  { path: "/signup", element: <SignUpForm />, type: "public" },
  { path: "/supports", element: <Supports />, type: "public" },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    type: "protected",
    children: [
      { index: true, element: <DashBoardHome />, type: "protected" },
      { path: "blogs", element: <Blogs />, type: "protected" },
      { path: "friends", element: <Friends />, type: "protected" },
      { path: "explore", element: <Explore />, type: "protected" },
      { path: "search", element: <Search />, type: "protected" },
      { path: "user", element: <User />, type: "protected" },
      { path: "user/:id", element: <UserDetail />, type: "protected" },
    ],
  },
];
