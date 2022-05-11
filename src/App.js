import React, { useState } from "react";
import Results from './components/Results.js';
import Footer from './components/Footer.js';
import './index.scss';

function App() {

  const [subjectInput, setSubjectInput] = useState('');
  const [results, setResults] = useState([]);
  const [engine, setEngine] = useState('text-curie-001');
  

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

    const url = `https://api.openai.com/v1/engines/${engine}/completions`;
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
    setEngine(event.target.value);
    console.log(engine)
  }

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <h1>Goldendoodle Poem Generator</h1>
        <form onSubmit={onSubmit}>
            <input
              type="text"
              name="object"
              placeholder="Enter an object"
              value={subjectInput}
              // API allows maxlength = 1000
              maxLength="1000"
              onChange={(e) => setSubjectInput(e.target.value)}
            />

            <p>Please select the engine:</p>
            <input type="radio" id="text-curie-001" name="engine" value="text-curie-001" onChange={onRadioChange} checked/>
            <label htmlFor="text-curie-001">text-curie-001</label>

            <input type="radio" id="text-davinci-002" name="engine" value="text-davinci-002" onChange={onRadioChange}/>
            <label htmlFor="text-davinci-002">text-davinci-002</label>

            <input type="radio" id="text-babbage-001" name="engine" value="text-babbage-001" onChange={onRadioChange}/>
            <label htmlFor="text-babbage-001">text-babbage-001</label>

            <input type="radio" id="text-ada-001" name="engine" value="text-ada-001" onChange={onRadioChange}/>
            <label htmlFor="text-ada-001">text-ada-001</label>

            <input type="submit" value="Generate Goldendoodle Poem" id="submit"/>
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
