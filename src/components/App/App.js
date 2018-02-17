import React, { Component } from 'react'
import classes from './App.css'

import ChatContainer from '../ChatContainer/ChatContainer'

class App extends Component {

    render () {
        return (
            <div className={classes.wrapper}>
                <ChatContainer></ChatContainer>
            </div>
        )
    }

}

export default App