import React, { Component } from 'react'
import './App.css'

import Navbar from '../Navbar/Navbar'
import Contacts from '../Contacts/Contacts'

class App extends Component {

    render () {
        return (
            <div className="wrapper">
                <Navbar />
                <Contacts />
            </div>
        )
    }

}

export default App