import React from 'react'

// rendering the cocktail details to display name, image and alcoholic or not
const cockTailDetails = ({cockTail}) => {
    return (
          <div className='main-card' key={cockTail.idDrink}>
             <img src={cockTail.strDrinkThumb} alt='cocktails'
             height= '200px'
             width = '200px'         
             />  
              <p className='main-ing'>{cockTail.strDrink}</p>

                <h2 className='main-title'>{cockTail.strAlcoholic}</h2>
           </div>          
    )
  }
  
  export default cockTailDetails