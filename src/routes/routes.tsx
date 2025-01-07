import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import UsersList from "./UsersList";
import ContactPage from "./ContactPage";
import UserDetails from "./UserDetails";
import Layout from "./Layout";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./privateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "contacts", element: <ContactPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetails /> }],
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

export default router;
