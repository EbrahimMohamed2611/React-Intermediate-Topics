import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import UsersList from "./UsersList";
import ContactPage from "./ContactPage";
import UserDetails from "./UserDetails";
import Layout from "./Layout";
import UserPage from "./UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
