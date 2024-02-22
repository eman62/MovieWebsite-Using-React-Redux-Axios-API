import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { LanguageContext,DirectionContext } from '../context/language';

function Header() {
  const navigate = useNavigate();
  const count = useSelector(state => state.counter.count);

  const { language, setLanguage } = useContext(LanguageContext);
  const { direction, setDirection } = useContext(DirectionContext);

  const handleWatchFavoritesClick = () => {
    navigate("/fav");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" dir={direction}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Movie App
        </Link>
        <div className="d-flex align-items-center">
          <span className="mr-3">
            <i className="bi bi-heart"></i>
          </span>
          <button
            className="btn btn-outline-primary"
            onClick={handleWatchFavoritesClick}
          >
            Watch Favorites ({count})
          </button>
          <NavDropdown title={language} id="dropdown-menu" className="m-2">
            <NavDropdown.Item eventKey="en">
              <button
                className="btn btn-link"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setLanguage('en');
                  setDirection('ltr');
                }}
              >
                En
              </button>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="ar">
              <button
                className="btn btn-link"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setLanguage('ar');
                  setDirection('rtl');
                }}
              >
                Ar
              </button>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </nav>
  );
}

export default Header;
