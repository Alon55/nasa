import React, { useState, useEffect } from 'react';

import MediaCard from './MediaCard';
import axios from 'axios';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:8080/favorites');
     const favoritesArr = [];
     for (let i = 0; i < res.data.length; i++) {
       favoritesArr.push({
         title: res.data[i].title,
         image: res.data[i].image,
         id: res.data[i]._id
      });
     }
     setFavorites(favoritesArr);
  };


  useEffect(() => {
    fetchData()
  }, []);

  const deleteFromFavorites = async (e) => {
    await axios.delete(`http://localhost:8080/favorite/${e.target.id}`);
    
    fetchData()
  }

  const showDescription = ()=> {
    const res = axios.get('http://localhost:8080/favorites');
     const favoritesArr = [];
     for (let i = 0; i < res.data.length; i++) {
       favoritesArr.push({
         title: res.data[i].title,
         image: res.data[i].image,
         id: res.data[i]._id
      });
     }
     setFavorites(favoritesArr);
  }
  return (
    <div>
      <h1>Favorites</h1>
        {favorites.map((s) => (
          <div>
            <MediaCard picture={s} />
            <img
              id={s.id}
              onClick={deleteFromFavorites}
              style={{ width: '30px', height: '30px' }}
              src='https://www.flaticon.com/premium-icon/icons/svg/2201/2201728.svg'
            ></img>
          </div>
        ))}
      
    </div>
  );
}
