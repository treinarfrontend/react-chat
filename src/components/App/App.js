import React, { Component } from 'react'
import classes from './App.css'

import Contacts from '../Contacts/Contacts'

class App extends Component {

    render () {
        return (
            <div className={classes.wrapper}>
                <Contacts />
            </div>
        )
    }

}

export default App