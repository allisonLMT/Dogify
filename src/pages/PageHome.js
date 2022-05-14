import React, { useState } from "react";
import NavMenu from '../components/NavMenu';
import SettingsModal from '../components/SettingsModal';
import Results from '../components/Results';
import Footer from '../components/Footer';
import classes from 'classnames';
import styles from '../styles/pageHome.module.scss';

function PageHome() {

    //keeps the content scrolled to the top as results are added (otherwise it scrolls under the header)
    const el = document.getElementById("content-wrap");
    if (el !== null) {
        el.scrollTo = 0;
    }

    //input from text field
    const [userInput, setUserInput] = useState('');
    //sanitized input from text field
    const [sanitizedInput, setSanitizedInput] = useState('');
    //results returned from the API, stored newest to oldest
    const [results, setResults] = useState([]);
    //engine selected from settings modal
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

    function handleInput(e) {
        console.log("handling")
        //sanitizes the input as it's entered
        //display/prompt is kept as the user has entered it, but the input sent to the API is sanitized
        setUserInput(e.target.value)

        //replaces all characters that are NOT alphanumeric, apostrophe or space and removes it (replaces it with nothing (''))
        const regex = /[^a-z0-9' ]/gi;
        const sanitizedInputValue = e.target.value.replace(regex, '');
       
        setSanitizedInput(sanitizedInputValue);

    }

    function onSubmit() {
       
       
        const prompts = generatePrompts();

        const url = `https://api.openai.com/v1/engines/${selectedEngine}/completions`;
        const parameters = {
            prompt: prompts.sanitized,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };
     
        getResponse(url, parameters)
        .then(data => {
            //add a key value pair to store the prompt with it's result
            data.prompt = prompts.asIs;
            
            //takes the existing result array, and concats the new response
            //then reverses the array (so when mapped, they are newest to oldest) and updates the result state
            var updatedResults = results.concat(data).reverse();
            setResults(updatedResults);
        });
        setSanitizedInput('');
    }

    function onRadioChange(event) {
        setSelectedEngine(event.target.value);
    }

    function randomNum(arr) {
        //random number from 0 to arr.length-1 (since it's floored)
        return Math.floor(Math.random()*arr.length);
    }

    function shuffleItem() {
        const items = ['a small wood chip', 'a handlebar mustache', 'a monocle and tophat', 'a campfire and smores', 'a pair of shoes', 'cat with a pom-pom crinkle ball', 'some warm cookies and milk','a dark and stormy night', 'a hotdog with ketchup', 'apple pie and vanilla ice cream', 'a walk along the beach', 'a cup of tea and a good book', 'a buried treasure', 'a jack-o-lantern', 'a big gloopy mud puddle', 'a road trip', 'a capybara in an intertube'];

        const item = items[randomNum(items)];
        setUserInput(item);
        setSanitizedInput(item);

        return item;
    }

    function generatePrompts() {

        //randomly select a dog breed from the list
        const breeds = ['Goldendoodle', 'French Bulldog', 'Corgi', 'Daschund', 'Chihuahua', 'Basset Hound', 'Great Dane', 'German Shephard', 'Pug', 'Bernese Mountain Dog', 'Beagle', 'Golden Retriever', 'Cocker Spaniel'];
        const randomBreed = breeds[randomNum(breeds)];
        let prompts;

        if (userInput === '' || sanitizedInput === '') {
            //if there was no user input, pick a random item to use
            const item = shuffleItem();
            prompts = {
                sanitized: `Write a story about a ${randomBreed} and ${item}.`,
                asIs: `Write a story about a ${randomBreed} and ${item}.`,
            }
        } else {      
            //generate two prompts with sanitizedInput and with userInput as-is (this is used for the stored prompt)
            prompts = {
                sanitized: `Write a story about a ${randomBreed} and ${sanitizedInput}.`,
                asIs: `Write a story about a ${randomBreed} and ${userInput}.`,
            }
        }
       
        return  prompts;
    }

    

    return (
        <div className='page-container'>
            <NavMenu page={'home'}/>
            <div className='content-wrap'>
                <div className='main-content'>
                    <section className={styles.intro}>
                        <div className={styles.titleSettings}>
                            <h2>What's Dogify?</h2>
                            <SettingsModal onRadioChange={onRadioChange} selectedEngine={selectedEngine}/>
                        </div>
                        <p>Dogify will write a story about a dog and whatever else you choose!</p>
                        <p>Not sure? Hit Shuffle! And don't worry, we'll pick a dog for you.</p>
                    </section>
                    <section className={styles.form}>
                        <div className={styles.labelShuffle}>
                            <label htmlFor="items">Add something to the story:</label>
                            <button className={ classes ("material-icons", styles.shuffle)} onClick={shuffleItem}>shuffle</button>
                        </div>
                        <input
                            type="text"
                            name="items"
                            className={styles.textBox}
                            placeholder="or leave it to us..."
                            value={userInput}
                            // API allows maxlength = 1000
                            maxLength="200"
                            onChange={(e) => handleInput(e)}
                        />
                        
                        <input type="submit" value="Dogify Now!" className={styles.submit} onClick={onSubmit}/>
                    </section>
                </div>
                {results.length > 0 &&
                        <Results results={results} /> 
                }
            </div>
            <Footer />
        </div>
  );
}

export default PageHome;
