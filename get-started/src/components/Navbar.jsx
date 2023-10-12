import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">ProSync</a>
      </div>
      <div className="navbar-end">
        <a href='https://productivity-planner-client.vercel.app/login' className="btn">Log In</a>
      </div>
    </div>
  );
};

export default Navbar;
