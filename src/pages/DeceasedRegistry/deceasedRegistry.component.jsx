import React from "react";
// import FormInput from "../../components/Form-Input/form-input.component";
import './deceasedRegistry.style.scss'
import '../SafeCheck/safecheck.style.scss'
// import CustomButton from "../../components/Custom-Button/custom-button.component";
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
        <div className="qfc-container">
            <h4>Report Deceased/ Missing</h4>
            {/* <form onSubmit={handleSubmit}>
                <FormInput name="name" type="text" value={state.name} handleChange={(e) => handleChange(e)} label="Name" required />
                <FormInput name="id" type="text" value={state.id} handleChange={(e) => handleChange(e)} label="ID" required />
                <FormInput name="age" type="number" value={state.age} handleChange={(e) => handleChange(e)} label="Age" required />
                <FormInput name="zipcode" type="zipcode" value={state.zipcode} handleChange={(e) => handleChange(e)} label="Zip Code" required />
                <div className="buttons">
                    <CustomButton type="submit">Add deceased</CustomButton>
                </div>
                {
                    completed?<p>Rest in peace</p>:<div></div>
                }
            </form> */}
            <form onSubmit={handleSubmit}>
            <div>
                <p style={{'color':'red'}}>Enter the known details of a deceased person. If ID is not known, enter 0.</p>
                <div>
                    <input placeholder="Name" name="name" type="text" value={state.name} onChange={(e) => handleChange(e)} label="Name" required />
                </div>
                <div>
                    <input placeholder="ID" name="id" type="text" value={state.id} onChange={(e) => handleChange(e)} label="ID" required/>
                </div>
                <div>
                    <input placeholder="Age" name="age" type="number" value={state.age} onChange={(e) => handleChange(e)} label="Age" required />
                </div>
                <div>
                    <input placeholder="zipcode" name="zipcode" type="zipcode" value={state.zipcode} onChange={(e) => handleChange(e)} label="Zip Code" required />
                </div>
				
                
                <div>
                    <button type="submit">Submit</button>
                </div>
                {
                    completed?<p>Information is stored. Rest in peace</p>:<div></div>
                }
            </div>
        </form>
        </div>
    )
}

export default DeceasedRegistry