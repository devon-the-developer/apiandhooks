import request from 'superagent'

const countriesAPI = 'https://restcountries.eu/rest/v2/name'

export function callCountryByName(name) {
    return request.get(countriesAPI + '/' + name)
        .then(countries => {
            return console.log(countries.body)
        })
}