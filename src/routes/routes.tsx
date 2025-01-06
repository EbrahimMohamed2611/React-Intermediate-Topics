import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import UsersListPage from "./UsersListPage";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersListPage /> },
  { path: "/users/:id", element: <UsersListPage /> },
  { path: "/contacts", element: <ContactPage /> },
]);

export default router;
