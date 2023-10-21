const checkFaourite = (item) => {
    let favouritesList = JSON.parse(localStorage.getItem('favourites'));

    if(!favouritesList){
        localStorage.setItem('favourites', '[]');
        return false;
    }

    for(const product of favouritesList){
        if(product.id === item.id){
            return true;
        }
    }
    return false;
}

export default checkFaourite;