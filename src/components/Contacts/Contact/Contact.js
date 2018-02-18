import React from 'react'
import './Contact.css'

const Contact = props => (
    <div className="contact">
        <div className="avatar">
            <img src="http://i.pravatar.cc/300" alt="Avatar"/>
        </div>

        <div className="details">
            <h2 className="name">Avatar Name</h2>
            <span className="last-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</span>
        </div>
    </div>
)

export default Contact