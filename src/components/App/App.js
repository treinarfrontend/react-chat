import React, { Component } from 'react'
import './App.css'

import Contacts from '../Contacts/Contacts'

class App extends Component {

    render () {
        return (
            <div className="wrapper">
                <Contacts />
            </div>
        )
    }

}

export default App