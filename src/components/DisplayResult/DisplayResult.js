import ThumbsUpOutlineicon from '@mui/icons-material/ThumbUp' 
import TextTruncate from 'react-text-truncate';
import React, { forwardRef } from 'react'
import "./DisplayResults.css"
const base_url = 'https://image.tmdb.org/t/p/original'
const DisplayResult = forwardRef(({movie},ref) => {
    
   
  return (
    <div    className='displayResult' >
        
       
        <div  ref={ref}className="movieDetails">
        <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
          <div className="movie_box">
          <TextTruncate
          line={1}
          element='p'
          truncateText='...'
          text={movie.overview}
          />
          <h2>{movie.title || movie.original_title || movie.name}</h2>
          <div className="movie-vote">
            <p>{movie.release_date || movie.first_air_date}</p> 
          <ThumbsUpOutlineicon/>
         <p> {movie.vote_count}</p>
        <p>Language: {movie.original_language}</p>
         </div>
         </div>
        </div>
    </div>
  )
});

export default DisplayResult