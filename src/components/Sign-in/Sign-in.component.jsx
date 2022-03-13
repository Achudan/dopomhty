import React from "react";
import { useState } from "react/cjs/react.development";
import './Sign-in.styles.scss';
import FormInput from "../Form-Input/form-input.component";
import SignUp from "../Sign-up/Sign-up.component";
// import CustomButton from "../Custom-Button/custom-button.component";

const Signin = () =>{
    const [name, setName] = useState({email:'',password:''});
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {email, password} = name;
        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        // }
        // catch(error){
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     if (errorCode === 'auth/wrong-password') {
        //         alert('Wrong password.');
        //       } else {
        //         alert(errorMessage);
        //       }
        //       console.log(error);
        // }
    }
    const handleChange = (e) =>{
        // console.log([e.target.name],e.target.value)
        setName((values)=>({...values,[e.target.name]:e.target.value,}))
    }
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email id and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={name.email} handleChange={(e)=>handleChange(e)} label="email" required/>
                <FormInput name="password" type="password" value={name.password} handleChange={(e)=>handleChange(e)} label="password" required/>
                <div className="buttons">
                    {/* <CustomButton type="submit">Sign in</CustomButton> */}
                    <button type="submit">Sign in</button>
                </div>
            </form>
            <SignUp/>
        </div>
    );
}

export default Signin;