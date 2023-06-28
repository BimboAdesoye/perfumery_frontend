import NavbarAccent from "../layouts/NavbarAccent";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div>
      <NavbarAccent />
      <div className="d-flex justify-content-center align-items-center parent">
        <div className="sign-In my-4">
          <div className="text-center pb-1 sign-in-heading">
            <h1 className="mb-5 sign-in-header">Forgotten Password</h1>
            <p className="sign-in-sub-heading">
              Enter your Email to reset password
            </p>
          </div>
          <form action="" className="d-flex flex-column gap-4">
            <div className="d-flex flex-column gap-1">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Placeholder" />
            </div>
            <button className="sign-in-btn">
              <Link to="/PasswordRecovery" className="text-decoration-none text-white">Reset Password</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
