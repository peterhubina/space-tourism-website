import Logo from "../assets/shared/logo.svg";

import Destination from "./Destination";

function Header() {
  return (
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
            <a
              className="ff-sans-cond uppercase txt-white letter-spacing-2"
              href="#"
            >
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase txt-white letter-spacing-2"
              href="#"
            >
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase txt-white letter-spacing-2"
              href="#"
            >
              <span aria-hidden="true">02</span>Crew
            </a>
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
  );
}

export default Header;
