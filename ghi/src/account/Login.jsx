import useToken, { useAuthContext } from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const navigate = useNavigate();

  const { token } = useAuthContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  return (
    // <>
    //   {token ? (
    //     <Navigate to="/" />
    //   ) : (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="text-center">Login to Your Account</h1>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="form-floating mb-3">
              <input
                onChange={(event) => setUsername(event.target.value)}
                placeholder="User Name"
                required
                type="text"
                value={username}
                name="username"
                id="username"
                className="form-control"
              />
              <label htmlFor="username">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(event) => setPassword(event.target.value)}
                placeholder="password"
                required
                value={password}
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                {token ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // )}
    // </>
  );
};

export default Login;
