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
      <div className="search">
        <button onClick={this.props.search}>
          Random Cocktail!</button>
      </div>
    )
}
}
export default RandomDrink


