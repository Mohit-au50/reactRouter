import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const actionSubmit = (e) => {
    e.preventDefault();
    console.log({ email }, { password });
  };

  return (
    <>
      <div className="login-card">
        <h1 className="mb">Login</h1>
        <hr className="mb" />
        <form onSubmit={actionSubmit}>
          <div className="mb">
            <label htmlFor="email" className="mb">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb">
            <label htmlFor="password" className="mb">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt">
            <input type="submit" value="Login" />
          </div>
          <div className="social-links mt">
            <i className="ri-linkedin-fill"></i>
            <i className="ri-github-fill"></i>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
