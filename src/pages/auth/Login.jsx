/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <label htmlFor="email" className="text-muted">
          Email
        </label>
        <div className="my-3">
          <input type="text" placeholder="johndoe@gmail.com" />
        </div>
        <label htmlFor="email" className="text-muted">
          Password
        </label>
        <div className="mt-2">
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="mt-4 sm:flex-center-between">
        <div className="flex-align-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Link className="text-primary hover:underline mt-3 sm:mt-0 block">
          Forgot your password?
        </Link>
      </div>
      <div className="mt-5">
        <Link
          to="/admin"
          className="btn block text-center !opacity-100 btn-primary w-full"
        >
          sign in
        </Link>
      </div>
      <p className="text-sm mt-3">
        Not yet registered?{" "}
        <Link to="/register" className="text-primary hover:underline">
          Register
        </Link>
      </p>
    </>
  );
};

export default Login;
