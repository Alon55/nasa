import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function NavBarLinks() {
  return (
    <div>
      <Link className='navBar' to='/home'>
        Home
      </Link>
      <Link className='navBar' to='/search'>
        Search
      </Link>
      <Link className='navBar' to='/favorites'>
        Favorites
      </Link>
    </div>
  );
}
