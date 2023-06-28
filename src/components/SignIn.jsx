import "../styles/SignIn.css";
import NavbarAccent from "../layouts/NavbarAccent";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <NavbarAccent />
      <div className="d-flex justify-content-center align-items-center parent">
        <div className="sign-In my-4">
          <div className="text-center pb-1 sign-in-heading">
            <h1 className="mb-5 sign-in-header">Sign Into Your Account </h1>
            <p className="sign-in-sub-heading">
              Sign In with Your Email and Password.
            </p>
          </div>
          <form action="" className="d-flex flex-column gap-4">
            <div className="d-flex flex-column gap-1">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Placeholder" />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="password">Password</label>
              <input type="password" id="paswword" placeholder="Placeholder" />
            </div>
            <Link to="/PasswordReset" className="text-black">Forgot Password?</Link>
            <div className="d-flex flex-column gap-1">
              <p>Remember me (optional)</p>
              <p>
                By providing my information, I agree to Fame Perfumery’s
                <a className="px-1" href="#">
                  Privacy Policy and Legal Statement
                </a>
              </p>
            </div>
            <button className="sign-in-btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
