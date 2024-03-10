import React, { useEffect, useState } from 'react'
import instance from '../helpers/axios'
import DisplayResult from '../DisplayResult/DisplayResult';
import './Result.css';
import FlipMove from 'react-flip-move'

const Result = ({selectedOption}) => {

    const[movies,setMovies]=useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
        const request = await instance.get(selectedOption);
            // console.log(request);
            setMovies(request.data.results)
    };
        fetchData();
    },[selectedOption])

    // console.log(movies);
  return (
    <div className='result'> 
      <FlipMove>
      {
            movies.map((movie)=>{
                console.log(movie);
            return <DisplayResult key={movie.id} movie={movie}/>
            })
            
         }
      </FlipMove>
         
    </div>
  )
}

export default Result