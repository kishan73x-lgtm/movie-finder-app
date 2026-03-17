import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {


   

  if(!movies || movies.length === 0){
    return <p>No Movies Found ....</p>  
    
  }
  return (
    <section className='movie-grid'>

      {movies.map((movie)=>(
          <MovieCard  key={movie.id} movie = {movie}/>
      ))}
      
    </section>
  )
}

export default MovieList
