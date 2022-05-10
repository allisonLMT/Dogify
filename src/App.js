import React, { useState } from "react";
import './App.css';

function App() {

  const [subjectInput, setSubjectInput] = useState("");
  const [result, setResult] = useState();

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
    });
  }

  function generatePrompt(input) {
    console.log("generating prompt " + input)
    //takes the user input and generates a prompt to create a poem
    return `Write a poem about a Goldendoodle and ${input}`; 
  }


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={subjectInput}
            onChange={(e) => setSubjectInput(e.target.value)}
          />
          <input type="submit" value="Generate Haiku" />
        </form>
        <div >{result}</div>
     
    </div>
  );
}

export default App;
