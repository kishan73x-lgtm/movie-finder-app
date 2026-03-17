import React from 'react'

const MovieCard = ({movie}) => {

    const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    :"";

  return (
    <article className='movie-card'>
        {poster && <img src={poster} alt={movie.original_title} />}
      <p className='title'>{movie.title}</p>
      <p><strong>Release : </strong>{movie.release_date}</p>
      <p><strong>Popularity : </strong>{movie.popularity}</p>
      <p><strong>Rating : </strong>{movie.vote_average}</p>
      <p><strong>Language : </strong>{movie.original_language}</p>
    </article>
    
  )
}

export default MovieCard
