import React, {Fragment} from 'react'

import { callCountryByName } from '../api'


export class CountryInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        callCountryByName(this.state.input)
        .then(this.props.passAround(this.state.input))
    }

    render() {
        return (
            <Fragment>
                <form>
                    <input type='text'
                        placeholder='Type Country Here'
                        onChange={this.handleChange}
                     />
                     <button onClick={this.handleClick}>
                         Submit
                    </button>
                </form>
            </Fragment>
        )
    }
}