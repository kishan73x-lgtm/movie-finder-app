import React from 'react'
import { useState } from 'react'

const SearchForm = ({searchMovies}) => {

  const[text,setText] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(!text.trim()){
      alert("enter valid data")
      return
    }

    searchMovies(text)


  }



  return (
    <section className='form-container'>
          <h2>movie Finder 🎬</h2>
          <form  onSubmit={handleSubmit}> 
               <label htmlFor="search"></label>
               <input type="text"
               className='search-input'
               id='search'
               name='search'
               placeholder='search movie...'
               value={text}
               onChange={(e)=> setText(e.target.value)}
                />
                <button type='submit'>🔍</button>
          </form>
    </section>
  )
}

export default SearchForm
