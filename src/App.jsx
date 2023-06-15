import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import ForgotPassword from "./components/pages/forgotpassword/ForgotPassword";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={Register} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/forgotpassword" Component={ForgotPassword} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
