import React from 'react'
import './Contact.css'

const Contact = props => (
    <div className="contact">
        <figure className="contact__avatar">
            <img src="http://i.pravatar.cc/300" alt="Avatar Name"/>
        </figure>

        <div className="contact__details">
            <h2 className="contact__details--name">Avatar Name</h2>
            <p className="contact__details--message">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
    </div>
)

export default Contact