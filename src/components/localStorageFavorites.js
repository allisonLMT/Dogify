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

    findFavorite(result)
}

function removeFavorite(result) {
    console.log("removing from fav")
    //to remove from favorites, first need to find it in the array

    //turn local storage back to an array

    //find the index of the result in the array
    const index = findFavorite(result);

    //use the index to remove the result from the array

    //stringify the array and put it back into storage

}

function findFavorite(result) {
    
    //get the results from storage
    var storageFavs = localStorage.getItem('favResults');

    if (storageFavs === null) {
        return -1;
    }

    //turn it back into an array
    storageFavs = JSON.parse(storageFavs);

    //search the array for the object that matches 'result'
    const resultIndex = storageFavs.findIndex(isInFavs);

    function isInFavs(obj) {
        return obj.id === result.id;
    }
    console.log(resultIndex)
    return resultIndex;
}

export { addFavorite, removeFavorite };