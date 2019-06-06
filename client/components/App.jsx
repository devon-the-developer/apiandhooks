import React from 'react'

import { callCountryByName } from '../api'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countries: ''
    }
  }
  componentDidMount() {
    callCountryByName('New Zealand')
  }

  render(){
    return (
      <h1>React development has begun!</h1>
    )
  }
}

export default App

