// Store the fav results in the array before moving them to local storage
var favResults = [];

function addFavorite(result) {

    //push the result into the array
    favResults.push(result);

    //stringify the array and add to local storage
    localStorage.setItem( 'favResults' , JSON.stringify(favResults) );

}

function removeFavorite(result) {

    //get the results from local storage, and turn back to an array
    var storageFavs = JSON.parse(localStorage.getItem('favResults'));

    //find the index of the result in the array
    const index = findFavorite(result);

    //use the index to remove the result from the array
    storageFavs.splice(index, 1);

    //set favResults to match
    favResults = storageFavs;

    //stringify the altered array and put it back into storage
    localStorage.setItem( 'favResults' , JSON.stringify(favResults) );
}


function findFavorite(result) {
    
    //get the Favorites from storage
    var storageFavs = localStorage.getItem('favResults');

    if (storageFavs === null) {
        return -1;
    }

    //turn Favorites back into an array
    storageFavs = JSON.parse(storageFavs);

    //search the array for the object that matches 'result'
    const resultIndex = storageFavs.findIndex(isInFavs);

    function isInFavs(obj) {
        return obj.id === result.id;
    }

    return resultIndex;
}

function getFavorites() {

    var storedFaves = localStorage.getItem('favResults');

    if ( storedFaves === null) {
        return [];
    } else {
        storedFaves = JSON.parse(storedFaves);
        return storedFaves;
    }
}

export { addFavorite, removeFavorite, findFavorite, getFavorites };