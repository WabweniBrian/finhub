/* eslint-disable jsx-a11y/anchor-has-content */
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div>
        <label htmlFor="fname" className="text-muted">
          First Name
        </label>
        <div className="my-3">
          <input type="text" placeholder="Brian" />
        </div>
        <label htmlFor="lname" className="text-muted">
          Last Name
        </label>
        <div className="my-3">
          <input type="text" placeholder="Wabweni" />
        </div>
        <label htmlFor="email" className="text-muted">
          Email
        </label>
        <div className="my-3">
          <input type="text" placeholder="johndoe@gmail" />
        </div>
        <label htmlFor="password" className="text-muted">
          Password
        </label>
        <div className="mt-2">
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="mt-5">
        <Link
          to="/admin"
          className="btn block text-center !opacity-100 btn-primary w-full"
        >
          sign up
        </Link>
      </div>
      <p className="text-sm mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default Register;
