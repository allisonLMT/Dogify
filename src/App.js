import React, { useState } from "react";
import './App.css';

function App() {

  const [animalInput, setAnimalInput] = useState("");
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
      prompt: "Write a poem about a dog wearing skis",
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


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate pet names" />
        </form>
        <div >{result}</div>
     
    </div>
  );
}

export default App;
