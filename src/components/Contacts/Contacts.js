import React from 'react'
import { connect } from 'react-redux'
import Contact from './Contact/Contact'
import './Contacts.css'


const Contacts = props => {
    let contacts = props.items.map(item => (
        <Contact key={item.id} name={item.name} />
    ))

    return (
        <div className="contacts">
            { contacts }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.contacts.items
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)