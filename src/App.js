import React, { useState } from "react";
import EngineRadio from './components/EngineRadio';
import Results from './components/Results.js';
import Footer from './components/Footer.js';
import './index.scss';

function App() {

    const [subjectInput, setSubjectInput] = useState('');
    const [results, setResults] = useState([]);
    const [selectedEngine, setSelectedEngine] = useState('text-curie-001');
  
    async function getResponse(url, parameters) {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(parameters)
        });
        return response.json()
    }

    function onSubmit(event) {
        event.preventDefault();
        const url = `https://api.openai.com/v1/engines/${selectedEngine}/completions`;
        const parameters = {
        prompt: generatePrompt(subjectInput),
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        };
     
        getResponse(url, parameters)
        .then(data => {
            //add a key value pair to store the prompt with it's result
            data.prompt = parameters.prompt;
            console.log(data)
            //takes the previous result array, and concats the new response, then updates the result state
            var updatedResults = results.concat(data)
            setResults(updatedResults);
        });
    }

    function generatePrompt(input) {
        //takes the user input and generates a prompt to create a poem
        const goldenPrompt = `Write a story about a Goldendoodle and ${input}`;
        return  goldenPrompt;
    }
 
    function onRadioChange(event) {
        console.log("radio change")
        setSelectedEngine(event.target.value);
    }

    return (
    <div className='page-container'>
        <div className='content-wrap'>
            <h1>Dogify!</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="object"
                    id="textBox"
                    placeholder="Enter an object"
                    value={subjectInput}
                    // API allows maxlength = 1000
                    maxLength="100"
                    onChange={(e) => setSubjectInput(e.target.value)}
                />
                <p>Please select the engine:</p>
                <EngineRadio engine='text-curie-001' selectedEngine={selectedEngine} onRadioChange={onRadioChange} />
                <EngineRadio engine='text-davinci-002' selectedEngine={selectedEngine} onRadioChange={onRadioChange} />
                <EngineRadio engine='text-babbage-001' selectedEngine={selectedEngine} onRadioChange={onRadioChange} />
                <EngineRadio engine='text-ada-001' selectedEngine={selectedEngine} onRadioChange={onRadioChange} />

                <input type="submit" value="Dogify Now!" id="submit"/>
            </form>
        
            {results.length > 0 &&
                <section>
                    <Results results={results} /> 
                </section>
            }
        </div>
      <Footer />
    </div>
  );
}

export default App;
