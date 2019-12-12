import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar: React.FC = () => {
    return (
        <div className='pageContainer'>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
        </div>
    )
}

export default Navbar
