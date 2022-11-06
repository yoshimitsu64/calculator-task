import { lazy } from "react";

const HomeFCPAGE = lazy(() => import("@pages/homeFCPage"));
const HomeCCPAGE = lazy(() => import("@pages/homeCCPage"));
const SettingsPage = lazy(() => import("@pages/settingsPage"));

export const routes = [
  {
    path: "/",
    Title: "Home(FC)",
    id: 1,
    component: <HomeFCPAGE />,
  },
  {
    path: "/HOMECC",
    Title: "Home(CC)",
    id: 2,
    component: <HomeCCPAGE />,
  },
  {
    path: "/Settings",
    Title: "Settings",
    id: 3,
    component: <SettingsPage />,
  },
];
