import React from "react";
import './Sign-up.styles.scss';
import FormInput from "../Form-Input/form-input.component";
import CustomButton from "../Custom-Button/custom-button.component";
import { useState } from "react/cjs/react.development";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../../pages/SafeCheck/safecheck.style.scss'

const SignUp = () => {
    const [state, setState] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setState((values) => ({ ...values, [e.target.name]: e.target.value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = state;
        if (password !== confirmPassword) {
            alert('password mismatch');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            const updatedUser = {
                ...state,
                displayName: displayName,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }
            setState(updatedUser)
            navigate('/');
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {/* <div className="sign-up">
            <h2 className="title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" type="text" value={state.displayName} handleChange={(e)=>handleChange(e)} label="Display Name" required/>
                <FormInput name="email" type="email" value={state.email} handleChange={(e)=>handleChange(e)} label="Email" required/>
                <FormInput name="password" type="password" value={state.password} handleChange={(e)=>handleChange(e)} label="Password" required/>
                <FormInput name="confirmPassword" type="password" value={state.confirmPassword} handleChange={(e)=>handleChange(e)} label="Confirm Password" required/>
                <div className="buttons">
                <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div> */}

            <div className="qfc-container">
                <h4>SIGN UP</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input placeholder="Name" name="displayName" type="text" value={state.displayName} onChange={(e) => handleChange(e)} label="Display Name" required />
                        </div>
                        <div>
                            <input placeholder="Email id" name="email" type="email" value={state.email} onChange={(e) => handleChange(e)} label="Email" required />
                        </div>
                        <div>
                            <input placeholder="Password" name="password" type="password" value={state.password} onChange={(e) => handleChange(e)} label="Password" required />
                        </div>
                        <div>
                            <input placeholder="Password" name="confirmPassword" type="password" value={state.confirmPassword} onChange={(e) => handleChange(e)} label="Confirm Password" required />
                        </div>


                        <div>
                            <button type="submit">SIGN UP</button>
                        </div>
                    </div>
                </form>
            </div>
            <Link className='logo' to="/signin" >
                <p>SIGN IN. I ALREADY HAVE AN ACCOUNT</p>
            </Link>
        </div>
    )
}

export default SignUp;