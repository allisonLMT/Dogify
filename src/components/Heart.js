import React from 'react';
import emptyHeart from '../images/emptyHeart.svg';
import filledHeart from '../images/filledHeart.svg';


function Heart() {
    //conditionally render the type of heart (empty or full) depending on if it's in faves or not (will need a way to tell)
    //empty heart will add it to faves onClick and turn to full. Clicking on full heart will remove and change to empty.


    return (

        <div>
            <img src={emptyHeart} alt="not favorite" />
        </div>
    )
}

export default Heart;