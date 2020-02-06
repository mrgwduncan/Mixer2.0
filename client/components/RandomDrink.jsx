import React from "react"
import {getRandoCocktail} from '../api'
import RandomDrinkDisplay from './RandomDrinkDisplay'

//returns random drink from API


class RandomDrink extends React.Component{
constructor(props) {
    super(props);

    this.state = {
      drink: null
    }
  }

handleOnClick = e => {
  getRandoCocktail().then(results => {

  this.setState({ drink: results, })
  })
}


  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>
          Random Cocktail!</button>

      {this.state.drink && (
        <RandomDrinkDisplay drink ={this.state.drink}/>
      ) 
        
      }
      </div>
    )
}
}
export default RandomDrink


