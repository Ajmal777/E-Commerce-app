const addFavourite = (item) => {
    let favouritesList = JSON.parse(localStorage.getItem('favourites'));
    if(!favouritesList){
        favouritesList = [];
    }

    favouritesList.push(item);
    localStorage.setItem('favourites', JSON.stringify(favouritesList));
}

export default addFavourite