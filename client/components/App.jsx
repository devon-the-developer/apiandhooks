import React from 'react'

import { callCountryByName, fetchCountryByName } from '../api'

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
    this.loadCountry()
  }

  loadCountry = () => {
    callCountryByName('New Zealand')
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
    if (this.state.loaded === true) {
      content = this.state.countries.map(country => country.name)
    } else {
      content = 'loading'
    }
    return (
      <div>
        <h1>React development has begun!</h1>
        <p>{content}</p>
      </div>
    )
  }
}

export default App

