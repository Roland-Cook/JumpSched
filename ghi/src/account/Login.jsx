import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const navigate = useNavigate(); // Change the hook name to navigate
  const [isAuthenticated, setIsAuthenticated] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await login(username, password);
    const token = response?.data?.token; // Adjust this based on the actual structure of the response
    if (!token) {
      setIsAuthenticated(true);
      navigate("/"); // Navigate to home page after successful login
    } else {
      console.log("Token not received after login");
    }
  } catch (error) {
    console.log("Login failed", error);
  }
};



  return (
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
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
