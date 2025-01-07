import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import UsersList from "./UsersList";
import ContactPage from "./ContactPage";
import UserDetails from "./UserDetails";
import Layout from "./Layout";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetails /> }, {}],
      },
      { path: "/contacts", element: <ContactPage /> },
    ],
  },
]);

export default router;
