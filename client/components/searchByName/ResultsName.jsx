import React from 'react'

import { getCocktailbyId } from '../../api'

class ResultsName extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      drinkSelected: false,
      drinkImage: ''
    }
  }

  handleClick = (e) => {
    getCocktailbyId(e.target.value).then(results => {
      this.setState({
        drinkImage: results.drinks[0].strDrinkThumb
      })
    })
  }

  render() {
    console.log('results', this.props.data)
    return(
      <div className="results">
        {this.props.data.drinks.map( drink => {
          return (
            <li key={drink.idDrink} value={drink.idDrink} onClick={this.handleClick}> 
            <img height="100px" width="100px" src={drink.strDrinkThumb}/>
            {drink.strDrink} </li>
          )
        })}  
      </div>
    )
  }
}

export default ResultsName