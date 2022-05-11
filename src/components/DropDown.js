import React from 'react';


function DropDown({ onDropDownChange }) {


    return (
        <label htmlFor='engine'>Select an engine:
            <select name="engine" id="engine" onChange={onDropDownChange}>
                <option value="text-curie-001" >text-curie-001</option>
                <option value="text-davinci-002" >text-davinci-002</option>
                <option value="text-babbage-001" >text-babbage-001</option>
                <option value="text-ada-001" >text-ada-001</option>
            </select>
        </label>
    )
}

export default DropDown;