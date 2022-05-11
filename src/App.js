import React, { useState } from "react";
import DropDown from './components/DropDown';
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
            
            //takes the previous result array, and concats the new response, then updates the result state
            var updatedResults = results.concat(data)
            setResults(updatedResults);
        });
    }

    function generatePrompt(input) {
        //randomly select a dog breed from the list
        const breeds = ['Goldendoodle', 'French Bulldog', 'Corgi', 'Daschund', 'Chihuahua', 'Basset Hound', 'Great Dane', 'German Shephard', 'Pug', 'Bernese Mountain Dog'];
        const randomNum = Math.floor(Math.random()*breeds.length);
        const randomBreed = breeds[randomNum]

        //takes the user input and generates a prompt to create a story about the input and the selected breed
        const dogPrompt = `Write a story about a ${randomBreed} and ${input}.`;
        return  dogPrompt;
    }

    function onDropDownChange(event) {
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
                <DropDown onDropDownChange={onDropDownChange} />

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
