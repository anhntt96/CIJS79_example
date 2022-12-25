const Header = (props) => {
  const { cartItems } = props;
  let username = localStorage.getItem("username");

  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://mindx.vn/images/logo.png"
            alt="Bootstrap"
            width={55}
          />
        </a>

        <div>
          <button type="button" className="btn btn-success">
            Cart{" "}
            <span className="badge text-bg-secondary">{cartItems.length}</span>
          </button>
          { username === null &&  (<button className="btn btn-success ms-2">Login</button>)}
          { username !== null &&  (<button className="btn btn-success ms-2">Hello {username}</button>)}
        </div>
      </div>
    </nav>
  );
};

export default Header;
