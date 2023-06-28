import NavbarAccent from "../layouts/NavbarAccent";

const PasswordRecovery = () => {
  return (
    <div>
      <NavbarAccent />
      <div className="d-flex justify-content-center align-items-center parent">
        <div className="sign-In my-4">
          <div className="text-center pb-1 sign-in-heading">
            <h1 className="mb-5 sign-in-header">Password Reset</h1>
            <p className="sign-in-sub-heading">Enter your new password</p>
          </div>
          <form action="" className="d-flex flex-column gap-4">
            <div className="d-flex flex-column gap-1">
              <label htmlFor="password">New Password</label>
              <input type="password" id="password" placeholder="Placeholder" />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="password">Confirm New Password</label>
              <input type="password" id="password" placeholder="Placeholder" />
            </div>
            <button className="sign-in-btn">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
