import React, { useEffect, useState } from 'react'
import Grid from '../Components/Grid';

function Favourites() {
  const [favouritesList, setFavouritesList] = useState([]);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('favourites'));
    setFavouritesList(list);
  }, [])
  return (
    <Grid category='Favourites' productsList={favouritesList}/>
  )
}

export default Favourites