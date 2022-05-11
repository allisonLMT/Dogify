import React from 'react';
import styles from '../styles/dropDown.module.scss'


function DropDown({ onDropDownChange }) {


    return (
        <div className={styles.dropDown}>
            <label htmlFor='engine' id={styles.engineLabel}>Engine: 
            <select name="engine" className={styles.engine} onChange={onDropDownChange}>
                <option value="text-curie-001" >text-curie-001</option>
                <option value="text-davinci-002" >text-davinci-002</option>
                <option value="text-babbage-001" >text-babbage-001</option>
                <option value="text-ada-001" >text-ada-001</option>
            </select>
            </label>
        </div>
        
    )
}

export default DropDown;