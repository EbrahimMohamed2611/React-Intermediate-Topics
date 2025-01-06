import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import UsersListPage from "./UsersListPage";
import ContactPage from "./ContactPage";
import UserDetails from "./UserDetails";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/users", element: <UsersListPage /> },
      { path: "/users/:id", element: <UserDetails /> },
      { path: "/contacts", element: <ContactPage /> },
    ],
  },
]);

export default router;
