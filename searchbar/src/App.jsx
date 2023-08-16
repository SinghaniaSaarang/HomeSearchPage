import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/Searchbar.jsx'
import { Searchresult } from './components/searchResult';


function App() {

const [results,setResults]=useState([]);

  return (
    <div className='App'>
    <div className="Screen1">
      <div className='logindata'>
        <div id='logo1'><img id='image1' src='https://yt3.ggpht.com/a/AATXAJzJq8lQ-6CL-DLfNpqmZLj1OHhkxXs8HaAoeA=s900-c-k-c0xffffffff-no-rj-mo'></img></div>
      </div>
      <div className='contents'>
        <div className='importanttopics'></div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <Searchresult results={results}/>
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default App
