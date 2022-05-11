import React, { Fragment } from 'react';


function EngineRadio({ engine, selectedEngine, onRadioChange }) {


    return (
        <>
            <input 
              type="radio" 
              id={engine} 
              name="engine" 
              value={engine} 
              onChange={onRadioChange} 
              checked={selectedEngine === engine}
            />
            <label htmlFor={engine}>{engine}</label>
        </>
    )
}

export default EngineRadio;