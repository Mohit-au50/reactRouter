import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="left">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/posts/list"}>Posts</NavLink>
          </div>
          <div className="right">
            <NavLink to={"/login"}>Login</NavLink>
          </div>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
