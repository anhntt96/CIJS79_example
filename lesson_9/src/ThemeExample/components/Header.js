import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

const Header = () => {

  const context = useContext(ThemeContext);
  const {theme, changeTheme } = context;

  return (
    <nav className={ theme === 'light' ? "navbar": "navbar bg-dark"}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://mindx.vn/images/logo.png"
            alt="Bootstrap"
            width={55}
          />
        </a>

        <div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={changeTheme}
            />
            <label
              className="form-check-label"
              style={{color:  theme === 'light' ? "": "white" }}
            >
              {theme}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
