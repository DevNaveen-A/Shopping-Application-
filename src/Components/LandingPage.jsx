import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <>
        <h1>Welcome to Bus Terminal</h1>
        <div>
            <Link to={'/adminLogin'}>
            <img src="https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1364485772.jpg" />
    </Link> <h2>Admin login</h2> 
    
    <Link to={"/userLogin"}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAABkPrq5Ii4C10QBxgGtAUOTXVJT3YFsHHQ&s"  /> </Link> <h2>User login</h2></div>
        </>
    )
}
