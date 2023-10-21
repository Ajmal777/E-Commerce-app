const removeFavourite = (item) =>{
    let favouritesList = JSON.parse(localStorage.getItem('favourites'));
    if(!favouritesList){
        localStorage.setItem('favourites', '[]');
        return;
    }

    const newList = favouritesList.filter(product => product.id !== item.id);
    localStorage.setItem('favourites', JSON.stringify(newList));
}

export default removeFavourite;