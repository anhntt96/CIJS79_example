const LoginForm = (props) => {
  const { username, setUsername, handleLogin, password, setPassword } = props;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <p>Please login with username: MindX, password:123456</p>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
