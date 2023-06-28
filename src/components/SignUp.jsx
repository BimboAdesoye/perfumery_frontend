import NavbarAccent from "../layouts/NavbarAccent";

const SignUp = () => {
  return (
    <div>
      <NavbarAccent />
      <div className="d-flex justify-content-center align-items-center parent">
        <div className="sign-In my-4">
          <div className="pb-1 sign-in-heading">
            <h1 className="mb-5 sign-in-header text-center">Create Your Account </h1>
            <p className="sign-in-sub-heading text-left">
              Create an account and benefit from a more personal shopping
              experience, and quicker online checkout.
            </p>
          </div>
          <form action="" className="d-flex flex-column gap-4">
            <div className="d-flex flex-column gap-1">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Placeholder" />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="firstname">FirstName</label>
              <input type="text" id="firstname" placeholder="Placeholder" />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="lastname">LastName</label>
              <input type="text" id="lastname" placeholder="Placeholder" />
            </div>
            <div className="d-flex flex-column gap-1">
              <label htmlFor="password">Password</label>
              <input type="password" id="paswword" placeholder="Placeholder" />
            </div>
            <div className="d-flex flex-column gap-1">
              <p>
                By providing my information, I agree to Fame Perfumery’s
                <a className="px-1" href="#">
                  Privacy Policy and Legal Statement
                </a>
              </p>
            </div>
            <button className="sign-in-btn">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
