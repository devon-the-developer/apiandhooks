import React from 'react'

import { CountryInput } from './CountryInput'
import { callCountryByName } from '../api'

const countriesAPI = 'https://restcountries.eu/rest/v2/name'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false,
      countries: []
    }
  }
  componentDidMount() {
    this.loadCountry('New Zealand')
  }

  loadCountry = (nameOfCountry) => {
    callCountryByName(nameOfCountry)
    .then(data => {
        this.setState({
        loaded: true,
        countries: data
        })
      }
    )
  }

  render(){
    let content = ''
    if (this.state.loaded === true ) {
      if (this.state.countries.length == 1) {
        content = this.state.countries.map((country,index) => <p key={index}>
          {country.name}
          <br />
          Region: {country.region}
          <br />
          Population: {country.population}
          <br /> 
          Capital: {country.capital}
        </p>)
      } else {
        content = this.state.countries.map((country,index) => <li key={index}>{country.name}</li>)
      }
    } else {
      content = 'loading'
    }
    console.log('this.state.countries: ', this.state.countries)
    return (
      <div>
        <h1>Search A Country</h1>
        <CountryInput passedFunction={this.loadCountry} />
        <ul>
          {content}
        </ul>
      </div>
    )
  }
}

export default App

