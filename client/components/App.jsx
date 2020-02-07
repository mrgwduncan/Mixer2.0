import React from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

import SearchIngredient from './SearchIngredient.jsx'
import RandomDrink from './RandomDrink'
import SearchName from './searchByName/SearchName.jsx'

import {getCocktailByName} from '../api.js'
import ResultsName from './searchByName/ResultsName.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //conditional rendering state properties
      showResults: 0,

      //name state properties
      nameResults: null,
      nameSearch: '',
      nameCocktailsList: null,

      

      //ingredient state properties
      ingredientResult: null,
    }
  }
  
  handleSubmitName = (e) => {
    console.log(typeof getCocktailByName)
    e.preventDefault()
    getCocktailByName(this.state.nameSearch)
    .then(cocktails => {
      console.log(cocktails)
      this.setState({
        nameCocktailsList: cocktails,
        showResults: 1,
        showIngredient: false,
        showRandom: false
      })
    })
  }

  handleChangeName = (e) => {
    console.log('change!')
    this.setState({
      nameSearch: e.target.value
    })
  }


    ingredientSubmitFunc = () => {handleSubmitIng = e => {
      e.preventDefault();
        searchByIngredient(this.state.ingredient).then(results => {
        this.setState({ drinks: results, });
      })
    }}


  render() {

        return (
          <div>
            <Header />
            <h2 className='heading' >Find your perfect cocktail!</h2>
            
            <SearchIngredient search={this.state.ingredientSubmitFunc} />
            <SearchName search={this.handleSubmitName} change={this.handleChangeName}/>
            <RandomDrink />
      
          { this.state.showResults == 1 ? 
            <ResultsName  data={this.state.nameCocktailsList} />
          : this.state.showResults == 2 ?             
            <p> Ingredient </p>
            : this.state.showResults == 3 ?            
            <p> Random </p> :
            null
          }      
            <Footer />
      
          </div>)
        
    //showResults = 1 ? <name> : {showresults = 2 ? <ingredient> : <random>} 
    //showResults = 1 ? <name> : null

}
}

export default App

//have the app class
  //has functions to search by name
  //and by ingredient
    //THESE DO NOT WORK, HAVE NOT BEEN REFACTORED

//Set state with variables too:
  //A. make the get functions work - DONE
  //B. render the right results - DOING
  //C. have places to store the results of the functions


//if one, show name ELSE
   //if two, show ingredient ELSE
    //if three, show random


/*

? :

showResults = 1 ? <name> : {showresults = 2 ? <ingredient> : <random>} 

*/