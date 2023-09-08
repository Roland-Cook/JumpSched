import useToken, { useAuthContext } from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const { register } = useToken();
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username: username,
      password: password,
      email: email,
      last_name: last_name,
      first_name: first_name,
      profile_image:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
    };
    register(userData, `http://localhost:8000/api/accounts`);
    event.target.reset();
    navigate("/login");
  };

  return (
    <>
      {!token ? (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1 className="text-center">Create an Account</h1>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-floating mb-3">
                  <input
                    onChange={(event) => setFirst_name(event.target.value)}
                    placeholder="First Name"
                    required
                    type="text"
                    name="first_name"
                    value={first_name}
                    id="first_name"
                    className="form-control"
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(event) => setLast_name(event.target.value)}
                    placeholder="Last Name"
                    required
                    type="text"
                    name="last_name"
                    value={last_name}
                    id="last_name"
                    className="form-control"
                  />
                  <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="email"
                    required
                    type="text"
                    name="email"
                    value={email}
                    id="email"
                    className="form-control"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="User Name"
                    required
                    type="text"
                    name="username"
                    value={username}
                    id="username"
                    className="form-control"
                  />
                  <label htmlFor="username">User Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="password"
                    required
                    type="password"
                    name="password"
                    value={password}
                    id="password"
                    className="form-control"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        console.log("Nice try goofy")
      )}
    </>
  );
};

export default Signup;
