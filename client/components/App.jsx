import React from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

import SearchIngredient from './SearchIngredient.jsx'
import SearchName from './searchByName/SearchName.jsx'

const App = () => {
  return (
    <div>
      <Header />
      
      <SearchIngredient />
      <SearchName />

      <Footer />
    </div>
  )
}

export default App
