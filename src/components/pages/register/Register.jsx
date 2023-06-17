import "./register.css";
import logo from "../../../asset/images/Logo.png";
import bikeMan from "../../../asset/images/bike.png";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const Register = () => {
  return (
    <div>
      {/* header */}
      <header>
        <img src={logo} alt="dms logo" />
        <span className="logo-text">DMS</span>
      </header>
      {/* header */}

      {/* register content */}
      <div className="register-container">
        <div className="left-container">
          <div className="left-content">
            <img src={bikeMan} alt="bike man" />
            <h2>Let’s help you manage your riders and delivery systems.</h2>
            <p>
              Every logistics company whether it’s a multi-national branding
              corporation or a regular local deserves the basic standard
              necessities in achieving a high service delivery
            </p>
            <Link to="/register">
              <button className="g-started">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="right-container">
          <div className="right-content">
            <progress className="progress-bar" max={100} value={70}></progress>
            <div className="left-info">
              <h2>Basic Information</h2>
              <p>Enter the following information below</p>
            </div>
            <form className="wrapper">
              <div className="input-name">
                <input type="text" placeholder="Company name" />
                <input type="text" placeholder="lastname" />
              </div>
              <input type="text" placeholder="Company Address" />
              <input type="number" placeholder="Phone Number" />
              <input type="email" placeholder="Company Email Address" />
              <input type="password" placeholder="Password" />
              <BsEye />
            </form>
            <p className="term-condition">
              By clicking "Next" you agree to our{" "}
              <Link to="">Terms of Service</Link>,<Link>Privacy Policy</Link>,
              and to receive marketing communications from Envoy.
            </p>
            <div className="account-info">
              <p className="account-text">Got an account? Sign in</p>
              <Link to="/login">
                <button className="reg-btn">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* register conten */}
    </div>
  );
};
export default Register;
