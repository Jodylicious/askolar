import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";
import { Link } from "react-router-dom";
import Home from "./components/Homepage";

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
      alert("The email and password must be fill or the account you enter is already exist.");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      alert("You have succesfully logged in.");
    }

    catch {
      alert(" The email or password you enter is incorrect.");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      alert("You have been logged out.");
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  const startHome = Home

  return (
    <div className="loginPage">
      <div class="row-login">
        <div class="col-login">
          <div className="loginForm">

            <div className="userLogin"> <img className="userIcon" src="https://png.pngtree.com/png-vector/20190919/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" alt="user" width="100px"></img>
              <h4>Login in as: {currentUser?.email} </h4>
            </div>

            <div className="userInput">
              <input className="inputBox" ref={emailRef} placeholder="Email" />
            </div>

            <div className="userInput">
              <input className="inputBox" ref={passwordRef} type="password" placeholder="Password" />
            </div>

            <div className="signBar">
              <p>Already have an account?</p>
              <button className="signInButton" disabled={loading || currentUser} onClick={handleLogin}>Sign In</button>
            </div>

            <div className="signBar">
              <p>Create New Account</p>
              <button className="signInButton" disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>
            </div>

            <div className="home-Page">
              <Link to="/homepage">
                <button className='home-Btn' disabled={loading || !currentUser} onClick={startHome}> Continue to App </button>
              </Link>
            </div>

            <button className="logout" disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>

          </div>
        </div>

        <div class="col-login">
          <div className="wel-header">
            <h4>Welcome to PUPBC ASKOLAR : Web-Based Chatbot for School Related Inquiries</h4></div>
          <img className="loginImage" src="https://static.vecteezy.com/system/resources/previews/003/689/225/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="loginImage" />
        </div>

        <div className="wel-header">
          <p><h5>You can visit our website at <a href="https://jodylicious.github.io/myapp/">https://jodylicious.github.io/myapp/</a></h5></p>
        </div>

      </div>
    </div>
  );
}