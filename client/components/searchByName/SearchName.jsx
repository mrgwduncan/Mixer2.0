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

  render() {

    return(
      <React.Fragment>
        <div className="search">
          <form onSubmit={this.props.search}>  
            <label> Search by name: &nbsp; </label>
            <input type="text" name="cname" placeholder="Enter Name" onChange={this.props.change} />
            <input type="submit"  />
          </form>
        </div>

      </React.Fragment>
      
    )
  }


}

export default SearchName