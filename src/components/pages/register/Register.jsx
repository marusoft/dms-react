import "./register.css";
import logo from "../../../asset/images/Logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      {/* header */}
      <header>
        <img src={logo} alt="dms logo" />
        <span className="logo-text">DMS</span>
      </header>
      {/* header */}
      {/* register conten */}
      <div className="register-container">
        <div className="left-container">
          <button className="g-started">Get Started</button>
        </div>
        <div className="right-container">
          <Link to="/login">
            <button className="reg-btn">Register</button>
          </Link>
        </div>
      </div>
      {/* register conten */}
    </div>
  );
};
export default Register;
