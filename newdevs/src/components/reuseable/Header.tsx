import React from 'react'
import Navbar from './Navbar'

const Header: React.FC = () => {
    return (
        <div className='pageContainer'>
            <Navbar/>
            <h1 className='siteHeader'>Welcome to New Devs</h1>
        </div>
    )
}

export default Header
