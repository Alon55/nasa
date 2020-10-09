import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import MediaCard from './MediaCard';

export default function Search() {
  const [searchPic, setSearchPic] = useState([]);

  const searchWord = (word) => {
    Promise.resolve(
      axios.get(`https://images-api.nasa.gov/search?q=${word}`)
    ).then(
      function (value) {
        let searchArr = value.data.collection.items;

        let newSearchArr = [];
        searchArr
          .filter((s) => s.data[0].media_type === 'image')
          .map((s) =>
            newSearchArr.push({
              title: s.data[0].title,
              image: [s.links[0].href],
              description: s.data[0].explanation,
            })
          );

        setSearchPic(newSearchArr);
      },
      function (value) {}
    );
  };

  const addNewFavorite = async (img, title) => {
    await axios.post('http://localhost:8080/favorite', {
      title: title,
      image: img
      
    });
    
  };

  const addToFavorites = (e) => {
    let data = e.target.name;
    let img = data.slice(0, data.indexOf(' '));
    let title = data.slice(data.indexOf(' '));
    addNewFavorite(img, title)
  };

  return (
    <div>
      <h1>Search</h1>
      <SearchBar searchWord={searchWord} />
      <div>
        {searchPic.map((s) => (
          <div>
            <MediaCard picture={s} />
            <img
              name={s.image +" "+ s.title}
              onClick={addToFavorites}
              style={{ width: '30px', height: '30px' }}
              src='https://image.flaticon.com/icons/svg/900/900397.svg'
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
