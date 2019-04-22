import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const {navToggle, toggler} = props
    return (
        <div onClick = {toggler} className = {`nav nav-${navToggle ? "open" : "closed"}`}>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        </div>
    )
}

export default NavBar