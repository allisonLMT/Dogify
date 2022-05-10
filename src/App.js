import React, { useState } from "react";
import Results from './components/Results.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {

  const [subjectInput, setSubjectInput] = useState('');
  const [prompt, setPrompt] = useState('');
  const [results, setResults] = useState([]);
  

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

    const url = 'https://api.openai.com/v1/engines/text-curie-001/completions';
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
      console.log(data)
      //takes the previous result array, and concats the new response, then updates the result state
      var updatedResults = results.concat(data)
      setResults(updatedResults);
    });
  }

  function generatePrompt(input) {
    //takes the user input and generates a prompt to create a poem
    const goldenPrompt = `Write a poem about a Goldendoodle and ${input}`;
    setPrompt(goldenPrompt);
    return  goldenPrompt;
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
              onChange={(e) => setSubjectInput(e.target.value)}
            />
            <input type="submit" value="Generate Goldendoodle Poem" />
        </form>
        
          {results.length > 0 &&
            <section>
              <Results prompt={prompt} results={results} /> 
            </section>
          }
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
