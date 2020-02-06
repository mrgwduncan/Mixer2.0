import React from 'react'

import {getCocktailByName} from '../../api'

class SearchName extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      searchTerm: '',
      currentCocktail: null,
      drinksFound: false
    }
  }

  handleSubmit = (e) => {
    console.log("Submitted.")
    e.preventDefault();
    getCocktailByName(this.state.searchTerm)
    .then(cocktail => {
      console.log(cocktail)
      this.setState({
        currentCocktail: cocktail,
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
      <React.fragment>
        <div className="search">
          <form onSubmit={this.handleSubmit}>  
            <label> Search by name: &nbsp; </label>
            <input type="text" name="cname" placeholder="Enter Name" onChange={this.handleChange} />
            <input type="submit"  />
          </form>
        </div>

        

      </React.fragment>
      
    )
  }


}

export default SearchName