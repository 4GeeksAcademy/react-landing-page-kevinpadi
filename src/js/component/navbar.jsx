import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark px-5">
      <div className="container-fluid text-light">
        <a className="navbar-brand text-light" href="#">
          Start
        </a>
        <button
          className="navbar-toggler border border-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-0 ms-auto">
            <li className="nav-item ">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
