import React from "react";
import { useState } from "react/cjs/react.development";
import './Sign-in.styles.scss';
import FormInput from "../Form-Input/form-input.component";
import SignUp from "../Sign-up/Sign-up.component";
import CustomButton from "../Custom-Button/custom-button.component";
import { auth } from '../../firebase/firebase.utils'
import { useNavigate } from 'react-router-dom';
import '../../pages/SafeCheck/safecheck.style.scss'

const Signin = () => {
    const [name, setName] = useState({ email: '', password: '' });
    const [singedin, setsignin] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();
        const { email, password } = name;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setsignin(true);
            navigate('/');
        }
        catch (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
    }
    const handleChange = (e) => {
        console.log([e.target.name], e.target.value)
        setName((values) => ({ ...values, [e.target.name]: e.target.value, }))
    }
    return (
        // <div>
            <div className="qfc-container">
                <h4>SIGN IN</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input placeholder="Email id" name="email" type="email" value={name.email} onChange={(e) => handleChange(e)} label="email" required />
                        </div>
                        <div>
                            <input placeholder="Password" name="password" type="password" value={name.password} onChange={(e) => handleChange(e)} label="password" required />
                        </div>


                        <div>
                            <button type="submit">SIGN IN</button>
                        </div>
                    </div>
                </form>
            </div>
        // </div>
        // <div className="sign-in">
        //     <h2>Sign In</h2>
        //     <form onSubmit={handleSubmit}>
        //         <FormInput name="email" type="email" value={name.email} handleChange={(e)=>handleChange(e)} label="email" required/>
        //         <FormInput name="password" type="password" value={name.password} handleChange={(e)=>handleChange(e)} label="password" required/>
        //         <div className="buttons">
        //             <CustomButton type="submit">Sign in</CustomButton>
        //         </div>
        //     </form>
        // </div> 
    );
}

export default Signin;