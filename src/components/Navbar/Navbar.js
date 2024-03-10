import React from 'react'
import './Navbar.css'
import Request from '../helpers/Request'
import {NavLink} from 'react-router-dom'
const Navbar = ({setSelectedOption,setPath}) => {

  return (
    <div className='navbar'>
       <NavLink to={'/trending'} > <h2  onClick={()=>{ setPath('trending'); setSelectedOption(Request.fetchTrending) }}>Trending</h2></NavLink>
     <NavLink to='/topRated'>  <h2 onClick={()=>{ setPath('topRated'); setSelectedOption(Request.fetchTopRated)}}>TopRated</h2></NavLink>
     <NavLink to='/action'>  <h2 onClick={()=>{ setPath('action'); setSelectedOption(Request.fetchActionMovies)}}>Action</h2></NavLink>
       <NavLink to='/comedy'> <h2 onClick={()=>{ setPath('comedy'); setSelectedOption(Request.fecthComedyMovies)}}>Comedy</h2></NavLink>
       <NavLink to='/horror'> <h2 onClick={()=>{ setPath('horror'); setSelectedOption(Request.fetchHorrorMovies)}}>Horror</h2></NavLink>
       <NavLink to='/romance'> <h2 onClick={()=>{ setPath('romance'); setSelectedOption(Request.fetchRomancemovies)}}>Romance</h2></NavLink>
       <NavLink to='/mystery'> <h2 onClick={()=>{ setPath('mystery'); setSelectedOption(Request.fetchMysteryMovies)}}>Mystery</h2></NavLink>
       <NavLink to='/sciFi'> <h2 onClick={()=>{ setPath('sciFi'); setSelectedOption(Request.fetchSciFiMovies)}}>SciFi</h2></NavLink>
       <NavLink to='/western'> <h2 onClick={()=>{ setPath('western'); setSelectedOption(Request.fetchWesternMovies)}}>Western</h2></NavLink>
       <NavLink to='/animation'> <h2 onClick={()=>{ setPath('animation'); setSelectedOption(Request.fetchAnimationMovies)}}>Animation</h2></NavLink>
       <NavLink to='/tv'> <h2 onClick={()=>{ setPath('tv'); setSelectedOption(Request.fetchTVShows)}}>TV</h2></NavLink>
    </div>
  )
}

export default Navbar