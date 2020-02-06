import React from 'react'

import {getCocktailByName} from '../../api'

import ResultsName from '../searchByName/ResultsName'

class SearchName extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      searchTerm: '',
      currentCocktails: null,
      drinksFound: false
    }
  }

  handleSubmit = (e) => {
    console.log("Submitted.")
    e.preventDefault();
    getCocktailByName(this.state.searchTerm)
    .then(cocktails => {
      console.log(cocktails)
      this.setState({
        currentCocktails: cocktails,
        drinksFound: true
      })
    })

  }

  handleChange = (e) => {
    //console.log('change!')
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {

    return(
      <React.Fragment>
        <div className="search">
          <form onSubmit={this.handleSubmit}>  
            <label> Search by name: &nbsp; </label>
            <input type="text" name="cname" placeholder="Enter Name" onChange={this.handleChange} />
            <input type="submit"  />
          </form>
        </div>
        {this.state.drinksFound && (
          <ResultsName data={this.state.currentCocktails} />
        )}
      </React.Fragment>
      
    )
  }


}

export default SearchName