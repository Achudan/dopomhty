import React from "react";

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) =>{
    // console.log(label)
    return(
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        {
        label?
        <label className={`${otherProps.value.length?'shrink':''}form-input-label`}>{label.toLowerCase()}</label>:
        null
        }
    </div>
    )
}

export default FormInput;