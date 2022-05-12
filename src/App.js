import React, { useState } from "react";
import Header from './components/Header';
import SettingsModal from './components/SettingsModal';
import Results from './components/Results';
import Footer from './components/Footer';
import './index.scss';

function App() {

    const [userInput, setUserInput] = useState('');
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
        console.log("submitted")
        event.preventDefault();
        const url = `https://api.openai.com/v1/engines/${selectedEngine}/completions`;
        const parameters = {
        prompt: generatePrompt(userInput),
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
            
            //takes the existing result array, and concats the new response
            //then reverses the array (so when mapped, they are newest to oldest) and updates the result state
            var updatedResults = results.concat(data).reverse();
            setResults(updatedResults);
        });
       
    }

    function randomNum(arr) {
        return Math.floor(Math.random()*arr.length);
    }

    function shuffleItem(userInput) {
        const items = ['a green pencil sharpener', 'a handlebar mustache', 'a monocle and tophat', 'a campfire and marshmallows', 'some unicycles and a clown', 'a pair of shoes', 'a cat and a toucan', 'some warm cookies and milk','a dark and stormy night', 'a hotdog with mustard'];
        console.log("selecting items")
        var item;
        //if the user hasn't added input, use a random item instead
        if (userInput === '') {
            item = items[randomNum(items)];
            setUserInput(item);
        } else {
            return userInput;
        }

        return item
    }

    function generatePrompt(userInput) {
        console.log("generating prompt")
        //randomly select a dog breed from the list
        const breeds = ['Goldendoodle', 'French Bulldog', 'Corgi', 'Daschund', 'Chihuahua', 'Basset Hound', 'Great Dane', 'German Shephard', 'Pug', 'Bernese Mountain Dog', 'Beagle', 'Golden Retriever', 'Cocker Spaniel'];
        const randomBreed = breeds[randomNum(breeds)];

        const input = shuffleItem(userInput);

        //takes the user input and generates a prompt to create a story about the input and the selected breed
        const dogPrompt = `Write a story about a ${randomBreed} and ${input}.`;
        return  dogPrompt;
    }

    function onDropDownChange(event) {
        console.log("dropdownchange")
        setSelectedEngine(event.target.value);
    }

    return (
    <div className='page-container'>
        <Header />
        <div className='content-wrap'>
            <section className='intro'>
                <h2>What's Dogify?</h2>
                <p>Dogify will write a story about a dog and whatever else you choose!</p>
                <p>Not sure? Hit Shuffle! And don't worry, we'll pick a dog for you.</p>
            </section>
            <section>
                <div className='textShuffle'>
                    <input
                        type="text"
                        name="object"
                        id="textBox"
                        placeholder="enter your story items here..."
                        value={userInput}
                        // API allows maxlength = 1000
                        maxLength="100"
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button className="material-icons" onClick={shuffleItem}>shuffle</button>
                </div>
                <div className='submitSettings'>
                    <SettingsModal onDropDownChange={onDropDownChange}/>
                    <input type="submit" value="Dogify Now!" id="submit" onClick={onSubmit}/>
                </div>
            </section>
        
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
