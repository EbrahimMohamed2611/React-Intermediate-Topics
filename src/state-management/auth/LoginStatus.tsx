import useAuthStore from "./store";
import useAuth from "./useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();
  const { userName, login, logout } = useAuthStore();

  if (userName)
    return (
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link">{userName}</a>
        </li>
        <li className="nav-item">
          <a onClick={() => logout()} className="nav-link active" href="#">
            {" "}
            Logout
          </a>
        </li>
      </ul>
    );
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <a
            onClick={() => {
              login("ebrahim.elmohamed26@gmail.com");
            }}
            className="nav-link active"
            href="#"
          >
            Login
          </a>
        </li>
      </ul>
    </>
  );
};

export default LoginStatus;
