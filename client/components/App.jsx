import React from 'react'


import SearchIngredient from './SearchIngredient.jsx'
import RandomDrink from './RandomDrink'
import SearchName from './searchByName/SearchName.jsx'

const App = () => {
  return (
    <div>
      <SearchIngredient />
      <SearchName />
      <RandomDrink />

    </div>
  )
}

export default App
