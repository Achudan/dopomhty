import React from "react";
import './Sign-up.styles.scss';
import FormInput from "../Form-Input/form-input.component";
// import CustomButton from "../Custom-Button/custom-button.component";
import { useState } from "react/cjs/react.development";
// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () =>{
    const[state, setState] = useState({displayName:'', email:'', password:'', confirmPassword:''});
    const handleChange = (e) =>{
        setState((values)=>({...values, [e.target.name]:e.target.value}));
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = state;
        if(password !== confirmPassword){
            alert('password mismatch');
            return;
        }
        // try{
        //     const {user} = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfileDocument(user, {displayName});
        // }
        // catch(error){
        //     console.log(error);
        // }
    }
    return(
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign-up with your email id and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" type="text" value={state.displayName} handleChange={(e)=>handleChange(e)} label="Display Name" required/>
                <FormInput name="email" type="email" value={state.email} handleChange={(e)=>handleChange(e)} label="Email" required/>
                <FormInput name="password" type="password" value={state.password} handleChange={(e)=>handleChange(e)} label="Password" required/>
                <FormInput name="confirmPassword" type="password" value={state.confirmPassword} handleChange={(e)=>handleChange(e)} label="Confirm Password" required/>
                
                {/* <CustomButton type="submit">Sign Up</CustomButton> */}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;