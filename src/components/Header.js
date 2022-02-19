import Logo from "../assets/shared/logo.svg";

import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="primary-header flex nav">
        <div>
          <img className="logo" src={Logo} alt="space tourism logo" />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
          <span className="sr-only">Menu</span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            className="primary-navigation underline-indicators flex"
            data-visible="false"
          >
            <li className="active">
              <Link
                className="ff-sans-cond uppercase txt-white letter-spacing-2"
                to="/"
              >
                <span aria-hidden="true">00</span>Home
              </Link>
            </li>
            <li>
              <Link
                className="ff-sans-cond uppercase txt-white letter-spacing-2"
                to="/destination"
              >
                <span aria-hidden="true">01</span>Destination
              </Link>
            </li>
            <li>
              <Link
                className="ff-sans-cond uppercase txt-white letter-spacing-2"
                to="/crew"
              >
                <span aria-hidden="true">02</span>Crew
              </Link>
            </li>
            <li>
              <a
                className="ff-sans-cond uppercase txt-white letter-spacing-2"
                href="#"
              >
                <span aria-hidden="true">03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
