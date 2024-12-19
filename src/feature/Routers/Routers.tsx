import { createBrowserRouter } from "react-router-dom";
import { App } from "../../@App/App";
import { Home } from "../Home";
import { ErrorBoundary } from "../ErrorBoundary";
import { LoginPage } from "../User";

export const routers = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
    ],
  },
]);
