import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../CSS/Form.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function RegUser() {
  let [user,setUser]=useState({
    name:"",
    email:"",
    mobile:"",
    password:"",confirm_password:""
  });
  function reg(e){
    let {value,name}=e.target;
    setUser((preValue)=>({...preValue,[name]:value}));
  }
  let nav=useNavigate();
  function add_user(e){
    e.preventDefault();
    axios.post("http://localhost:1007/users",user).then((tart)=>{
      console.log(tart);
      toast.success("Registration successful");
      nav('/userLogin')
    }).catch((bug)=>{
      console.log(bug);
      toast.error("Registration failed");
      
    })
  }
    return (
    <>
    <h1>Welcome to user Registration Page </h1>
    <form action="" onSubmit={add_user}>
        <label htmlFor="">UserName:</label>
        <input type="text" name="name" value={user.name} onChange={reg}  placeholder='Enter the username'/><br />
        <label htmlFor="">Email:</label>
        <input type="text" name="email" value={user.email} onChange={reg}  placeholder='Enter the email'/><br />
        <label htmlFor="">Mobile</label>
        <input type="tel" name="mobile" value={user.mobile} onChange={reg}  placeholder='Enter the mobile number' /><br />
        <label htmlFor="">Password:</label>
        <input type="text" name="password" value={user.password} onChange={reg}  placeholder='Enter the password'/><br />
        <label htmlFor="">Confirm Password</label>
        <input type="text" name='confirm_password' value={user.confirm_password} onChange={reg}  placeholder='Re-Enter the password' /><br />
        <Button variant="success" type='submit'>Register</Button><br />
        <Button variant='danger' type='reset'>Rest</Button>
    </form>
    </>
    )
}
