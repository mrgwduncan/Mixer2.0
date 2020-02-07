import React from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

import SearchIngredient from './SearchIngredient.jsx'
import RandomDrink from './RandomDrink'
import SearchName from './searchByName/SearchName.jsx'

class App extends React.component {
  constructor() {
    super()
    this.state = {
      showRandom: false,
      showIngredient: false,
      showName: false,
      nameResult: null,
      ingredientResult: null,
      // ingredientSubmitFunc: {handleSubmitIng = e => {
      //   e.preventDefault();
      //     searchByIngredient(this.state.ingredient).then(results => {
      //     this.setState({ drinks: results, });
      //   });
      // }},
  //     nameSubmitFunc: {
  //       handleSubmitName = (e) => {
  //         console.log("Submitted.")
  //         e.preventDefault();
  //         getCocktailByName(this.state.searchTerm)
  //         .then(cocktails => {
  //           console.log(cocktails)
  //           this.setState({
  //             currentCocktails: cocktails,
  //             drinksFound: true
  //           })
  //         })
  //       }
  //     }

  //   }
  // }
  
    }
  }


  render() {
  return (
    <div>
      <Header />
      <h2 className='heading' >Find your perfect cocktail!</h2>
      
      <SearchIngredient search={this.state.ingredientSubmitFunc} />
      <SearchName search={this.state.nameSubmitFunc}/>

      
      <RandomDrink />


      <Footer />

    </div>
  )
}
}

export default App
