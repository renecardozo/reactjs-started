import React from 'react';
const NavBar = (pepe) => {
  const { totalCounters } = pepe;
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar {" "}
        <span className="badge badge-pill badge-primary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}
export default NavBar;

