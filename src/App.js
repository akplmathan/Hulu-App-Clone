import React, { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Request from './components/helpers/Request'
import Result from './components/Results/Result'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = (e) => {

  const[path,setPath]=useState('trending')
  const[selectedOption,setSelectedOption]=useState(Request.fetchTrending);

  // console.log(selectedOption);
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
     
      <Navbar setSelectedOption={setSelectedOption} setPath={setPath}/>
      <Result selectedOption={selectedOption}/>
      <Routes>
        
      <Route path={`/${path}`} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App






