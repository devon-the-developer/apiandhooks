import React, { Fragment, useState } from 'react'

import { callCountryByName } from '../api'

export function CountryInput (props) {
    const [searchValue, setSearchValue] = useState(null)

    const handleKeyDown = (event) => {
        if (event.keyCode == 13) {
            handleClick(event)
        }
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault()
        callCountryByName(searchValue)
        .then(props.passedFunction(searchValue))
    }
    

    return (
        <Fragment>
            <form>
                <input type='text'
                    placeholder='Type Country Here'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleClick}>
                    Submit
                </button>
            </form>
        </Fragment>
    )
}