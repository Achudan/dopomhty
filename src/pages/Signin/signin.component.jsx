import React from "react";
import './signin.style.scss';
import Signin from "../../components/Sign-in/Sign-in.component";
// import SignUp from "../../components/Sign-up/Sign-up.component";
import { Link } from "react-router-dom";
const SigninSignup = () => (
    <div>
        <div className="sign-in-up">
            <Signin />

            {/* <SignUp/> */}
        </div>
        <Link className='logo' to="/signup" >
            <p>SIGN UP. I DO NOT HAVE AN ACCOUNT</p>
        </Link>
    </div>
)

export default SigninSignup;