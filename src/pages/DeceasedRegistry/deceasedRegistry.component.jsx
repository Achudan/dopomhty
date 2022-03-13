import React from "react";
import FormInput from "../../components/Form-Input/form-input.component";
import './deceasedRegistry.style.scss'
import CustomButton from "../../components/Custom-Button/custom-button.component";
import { useState } from "react/cjs/react.development";
import {createDeceasedPeopleDocument} from "../../firebase/firebase.utils"
import uuid4  from 'uuidv4';

const DeceasedRegistry = () => {
    const [state, setState] = useState({ name: '', id: '', age: '', zipcode: '' });
    // const { uuid } = require('uuidv4');
    const [completed, iscompleted] = useState(false);
    const handleChange = (e) => {
        setState((values) => ({ ...values, [e.target.name]: e.target.value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, id, age, zipcode } = state;
        try {

            // const {user} = await auth.createUserWithEmailAndPassword(email, password);
            // const randomid = Math.random()*10000000000;
            
            const randomid = uuid4()
            console.log(randomid)

            const updatedDetails = {
                ...state,
                name: name,
                id: id,
                age: age,
                zipcode: zipcode
            }
            setState(updatedDetails)
            await createDeceasedPeopleDocument(randomid, {updatedDetails});
            iscompleted(true);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="sign-up">
            <h2 className="title">Report deceased</h2>
            <form onSubmit={handleSubmit}>
                <FormInput name="name" type="text" value={state.name} handleChange={(e) => handleChange(e)} label="Name" required />
                <FormInput name="id" type="text" value={state.id} handleChange={(e) => handleChange(e)} label="ID" required />
                <FormInput name="age" type="number" value={state.age} handleChange={(e) => handleChange(e)} label="Age" required />
                <FormInput name="zipcode" type="zipcode" value={state.zipcode} handleChange={(e) => handleChange(e)} label="Zip Code" required />
                <div className="buttons">
                    <CustomButton type="submit">Add deceased</CustomButton>
                </div>
                {/* <button type="submit">Sign Up</button> */}
                {
                    completed?<p>Rest in peace</p>:<div></div>
                }
            </form>
        </div>
    )
}

export default DeceasedRegistry