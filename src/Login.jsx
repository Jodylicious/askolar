import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";
import { Link } from "react-router-dom";
import Home from "./components/Homepage";
import { ArrowForward } from "@mui/icons-material";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    }
    catch {
      alert("You must enter a valid email address or email is already exists.");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    }

    catch {
      alert(" The email or password you enter is incorrect");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  const startHome = Home

  return (
    <div className="loginPage">
      <div className="loginForm">

        <div className="userLogin"> <img className="userIcon" src="https://png.pngtree.com/png-vector/20190919/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" alt="user" width="100px"></img>
          <h4>Logged in as: </h4> {currentUser?.email}
        </div>

        <div className="userInput">
         <input className="inputBox" ref={emailRef} placeholder= "Email" /><br />
          <input className="inputBox" ref={passwordRef} type="password" placeholder="Password" />
        </div>

        <button className="sub-Btn" disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>

        <button className="sub-Btn" disabled={loading || currentUser} onClick={handleLogin}>Log In</button>

        <button className="sub-Btn" disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>


        <div className="home-Page">
          <Link to="/homepage">
            <button className='home-Btn' disabled={loading || !currentUser} onClick={startHome}> <ArrowForward/> </button>
          </Link>
        </div>


      </div>
    </div>
  );
}