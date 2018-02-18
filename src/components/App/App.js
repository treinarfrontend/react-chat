import React, { Component } from 'react'
import './App.css'

import Navbar from '../Navbar/Navbar'
import Contacts from '../Contacts/Contacts'
import Content from '../Content/Content'

class App extends Component {

    render () {
        return (
            <div className="wrapper">
                <Navbar />
                <Contacts />
                <Content />
            </div>
        )
    }

}

export default App