import React, { useState, useEffect } from 'react'



export default function SearchBar(props) {
  
    const [word, setWord] = useState('')

   const searchWord2 = ()=> {
   props.searchWord(word)
   
   }

   const wordInput = (e) => {
let newWord = e.target.value
setWord(newWord)

   }


  return (
      <div>
<input id='name' placeholder='Search the universe' onChange={wordInput}></input>
<button onClick={searchWord2}>Search</button>
      </div>
    
  )
}