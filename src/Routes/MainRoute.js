import Analytics from "../Components/Analytics/Analytics";
import CarbonReport from "../Components/CarbonReport/CarbonReport";
import DomainRegistration from "../Components/DomainRegistration/DomainRegistration";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import WebAnalytics from "../Components/WebAnalytics/WebAnalytics";
import Website from "../Components/Website/Website";
import MainLayout from "../Layout/MainLayout";

const { createBrowserRouter } = require("react-router-dom");
const {
  default: MainDashboard,
} = require("../Components/MainDashboard/MainDashboard");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
    children: [
      {
        path: "/",
        element: <Website />,
      },
      {
        path: "/DomainRegistration",
        element: <DomainRegistration />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/WebAnalytics",
        element: <WebAnalytics />,
      },
      {
        path: "/CarbonReport",
        element: <CarbonReport />,
      },
    ],
  },
  {
    path: "/login",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/login/register",
        element: <Register />,
      },
    ],
  },
]);
