import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function MediaCard(props) {
  
  return (
    <div>
      <h1>{props.picture.title}</h1>
      <Link to={`/favorite/${props.picture.id}`}><img src={props.picture.image} onerror='https://image.flaticon.com/icons/svg/2519/2519278.svg'></img></Link>
      <p>{props.picture.description}</p>
    </div>
  );
}
