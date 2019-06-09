import React,  { useState, useEffect } from 'react'

import { CountryInput } from './CountryInput'
import { callCountryByName } from '../api'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [countries, setCountries] = useState([])
  const [content, setContent] = useState('')

  useEffect(() => {
    loadCountry('New Zealand')
  }, [])

  useEffect(() => {
    if (loaded === true ) {
      if (countries.length == 1) {
        setContent(countries.map((country,index) => <p key={index}>
          {country.name}
          <br />
          Region: {country.region}
          <br />
          Population: {country.population}
          <br /> 
          Capital: {country.capital}
          </p>))
      } else {
        setContent(countries.map((country,index) => <li key={index}>{country.name}</li>))
      }
    } else {
      setContent('loading')
    }
  }, [countries])

  const loadCountry = (nameOfCountry) => {
    callCountryByName(nameOfCountry)
    .then(data => {
        const exactCountry = data.filter(country => country.name === nameOfCountry)
        if (newarray.length === 1) {
          setLoaded(true)
          setCountries(exactCountry)
        } else {
          setLoaded(true)
          setCountries(data)
        }
    })
    
  }

  return (
    <div>
      <h1>Search A Country</h1>
      <CountryInput passedFunction={loadCountry} />
      <ul>
        {content}
      </ul>
    </div>
  )

}
