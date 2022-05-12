import React, { Fragment } from 'react';
import styles from '../styles/radioButton.module.scss';


function RadioButton({ engine, description, selectedEngine, onRadioChange }) {


    return (
        <>
            <label htmlFor={engine}>
                <input 
                type="radio" 
                id={engine} 
                name="engine" 
                value={engine} 
                onChange={onRadioChange} 
                checked={selectedEngine === engine}
                />
                {description}
            </label>
        </>
    )
}

export default RadioButton; 