// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Form.css'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function UserLogin() {
  let [username,SetUsername]=useState("");
  let [password,SetPassword]=useState("");
  let [users,setUsers]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:1007/users").then((response)=>{
      console.log(response.data);
      setUsers(response.data);
    }).catch((bug)=>{console.log(bug)})
  },[]);
  let tem=users.filter((user)=>{
    return user.email===username && user.password===password
  })
  let nav=useNavigate();
  function validate_user(e){
    e.preventDefault();
    if(tem.length>0){
      toast.success("Login successful");
      nav('/userDb')
    }
    else{
      toast.error("Login failed");
    }
  }
    return (
    <div>
      <h1>User-Login page</h1>
      <form action="" onSubmit={validate_user}>
        <label htmlFor="">Username:</label>
        <input type="text"value={username} onChange={(e)=>{SetUsername(e.target.value)}} placeholder='Enter the username' /><br />
        <label htmlFor="">Password</label>
        <input type="text" value={password} onChange={(e)=>{SetPassword(e.target.value)}} placeholder='Enter the password' /><br />
        <span>New User?<Link to={'/regUser'}> Register</Link></span><br />
        <Button variant="success" type='submit'>Login</Button>
      </form>
    </div>
  )
}
