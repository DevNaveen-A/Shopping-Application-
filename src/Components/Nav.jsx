import React from 'react'
import '../CSS/Nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <>
            <div className="AdminNavbar">
                <div className="logo">
                    Bus<span>Teminal</span>
                </div>
                <div className="search">
                    <input type="text" placeholder='Enter the bus number' />
                </div>
                <div className="nav_links">
                    <Link to='/userDb/home'>Register</Link>
                    <Link to='/'>logout</Link>
                </div>
            </div>
        </>
    )
}
