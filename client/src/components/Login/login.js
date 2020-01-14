import React from "react";

function Login(props) {
  return (
    <div className="col-md-4">
      <div className="card text-center bg-light mb-3 loginCard">
        <div className="card-body">
          <h5 className="card-title">Log into H.T.P.</h5>
          <form>
            <div className="form-group">
              <label htmlFor="username"></label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={props.state.loginUser}
                onChange={event => props.handleChangeLoginUser(event)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={props.state.loginPassword}
                onChange={event => props.handleChangeLoginPassword(event)}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              id="login-btn"
              onClick={props.handleLogin}
            >
              Login
            </button>
            <div className="separator">OR</div>
            <button
              className="btn btn-success btn-block"
            >
              Create New User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;