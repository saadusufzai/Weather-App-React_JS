import React from 'react'
import { Link } from 'react-router-dom'

 const Navigation = () => {
    return (
        <div className="navbar">
            
            <div className="logo">TechWA Movie App</div>
            <div className="menus">
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/watchlist" >Watchlist</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation