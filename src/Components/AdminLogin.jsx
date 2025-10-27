// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/Form.css'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AdminLogin() {
  let [name,setName]=useState("");
  let [password,SetPassword]=useState("");
  let [user,setUser]=useState([]);
  let nav=useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:1007/Admin").then((response)=>{
      console.log(response.data);
      setUser(response.data);

    }).catch((rer)=>{
      console.log(rer);
    })
  },[]);

  let temp=user.filter((users)=>{
    return users.email===name && users.password===password
  })
  function login(e){
    e.preventDefault();
    
    if(temp.length > 0){
      toast.success("Login successful");
      nav('/dashboard')
      
    }
    else{
      toast.error("Login failed - Invalid credentials");
    }
  }
  return (
    <>
    <h1>Admin Login page</h1>
    <form action="" onSubmit={login}>
        <label htmlFor="">Email:</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter the email' /><br />
        <label htmlFor="">Password</label>
        <input type="text" value={password} onChange={(e)=>{SetPassword(e.target.value)}} placeholder='Enter the password' /><br />
        <span>New User?<Link to={'/regAdmin'}> Register</Link></span><br />
        <Button variant="success" type='submit'>Login</Button>
    </form>
    </>
  )
}
