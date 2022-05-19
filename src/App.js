import React, {useState, useEffect} from 'react';
import './style.css';
import CockTailDetails from './component/CockTailDetails';

function App() {
  const [letter, setLetter] = useState("")
  const[cockTailsearch, setCockTailSearch] = useState([])

  // rendering the cocktail details from the cocktailDB URL
  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + letter
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCockTailSearch(data))
  }, [letter])

  return (
    <>
    <div className='main-container'>
      <form>
        {/* Search bar to enter input */}
        <div className='search-container'>
          <input type='search' className='search-field' />
        </div>
      </form>
    </div>
    {cockTailsearch?.drinks?.map((cockTail, i) =>{
      return <CockTailDetails key={i} cockTail= {cockTail} />                    
  } )}  
  </> 
  );
}

export default App;
