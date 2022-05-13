import React from 'react';
import styles from '../styles/radioButton.module.scss';


function RadioButton({ engine, engineName, description, selectedEngine, onRadioChange }) {


    return (
        <label htmlFor={engine} className={styles.radioLabel}>
            <input 
            type="radio" 
            id={engine} 
            name="engine" 
            value={engine} 
            onChange={onRadioChange} 
            checked={selectedEngine === engine}
            />
            <span>{engineName}</span>{description}
        </label>
        
    )
}

export default RadioButton; 