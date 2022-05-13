//will need functions to add to faves and remove
//will need a way to tell if it's in faves (so the heart can conditionally render)

// Store the fav result in the array before moving them to local storage
var favResults = [];

function addFavorite(result) {
    console.log("adding to fav")
    //push the result into the array
    favResults.push(result);

    //stringify the array and add to local storage
    localStorage.setItem( 'favResults' , JSON.stringify(favResults) );
}

function removeFavorite() {
    console.log("removing from fav")
}

export { addFavorite, removeFavorite };