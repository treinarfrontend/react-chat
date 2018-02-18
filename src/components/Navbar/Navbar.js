import React from 'react'
import './Navbar.css'

const Navbar = props => (
    <nav className="navbar">

        {/*<div className="navbar__item menu">*/}
            {/*<a href="" className="menu__item">Menu 1</a>*/}
            {/*<a href="" className="menu__item">Menu 2</a>*/}
        {/*</div>*/}

        <div className="navbar__item profile">
            <div className="profile__name">Avatar Name</div>

            <figure className="profile__avatar">
                <img src="http://i.pravatar.cc/300" alt="Avatar Name"/>
            </figure>
        </div>

    </nav>
)

export default Navbar