import useAuthStore from "./store";

const LoginStatus = () => {
  //const { user, dispatch } = useAuth();
  const user = useAuthStore((state) => state.userName);
  const { login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Atif Khan Zee")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
