import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard';
import axios from 'axios';

export default function Home() {
  const [picture, setPicture] = useState({
    title: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    const getPictureOfTheDay = () => {
      Promise.resolve(
        axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=lfXTcb72iDi3px5sP3qwzjZJbUWfzUWVHcUyae9s'
        )
      ).then(
        function (value) {
          let pictureDay = {
            title: value.data.title,
            image: value.data.url,
            description: value.data.explanation,
          };
          setPicture(pictureDay);
        },
        function (value) {}
      );
    };
    getPictureOfTheDay();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MediaCard picture={picture} />
    </div>
  );
}
