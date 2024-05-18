import React from "react";
import {Link, useLocation} from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <link className="navbar-brand" to="/">
            Esports
          </link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  about
                </Link>
              </li>
            </ul>
            <form classNameName="d-flex" >
                <Link class="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                <Link class="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>

            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
