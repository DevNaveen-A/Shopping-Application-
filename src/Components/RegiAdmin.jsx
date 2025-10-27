import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../CSS/Form.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function RegiAdmin() {
    let [admin,setAdmin]=useState({
    name:"",email:"",phone:"",password:"",confirm_password:""
})
let nav =useNavigate()
function res(e){
    let {value,name}=e.target;
    setAdmin((preValue)=>({...preValue,[name]:value}));
}
function add_Admin(e){
    e.preventDefault();
    axios.post("http://localhost:1007/Admin",admin).then((response)=>{console.log(response);
        nav("/adminLogin")
        toast.success("Registration successful");
    })
    .catch((err)=>{
        console.log(err);
        toast.error("Admin registration failed")
    })
}
console.log(admin);


    return (
    <>
    <h1>Welcome to Admin- Registration Page </h1>
    <form action="" onSubmit={add_Admin}>
        <label htmlFor="" >UserName:</label>
        <input type="text" required name="name" value={admin.name} onChange={res} placeholder='Enter the username'/><br />
        <label htmlFor="">Email:</label>
        <input type="text"required name="email" value={admin.email}  onChange={res}  placeholder='Enter the email'/><br />
        <label htmlFor="">Mobile</label>
        <input type="tel" required name="phone" value={admin.phone}onChange={res} pattern='[0-9]{10}'  placeholder='Enter the mobile number' /><br />
        <label htmlFor="">Password:</label>
        <input type="text" required name="password"  value={admin.password} onChange={res} placeholder='Enter the password'/><br />
        <label htmlFor="">Confirm Password</label>
        <input type="text" required name='confirm_password' value={admin.confirm_password} onChange={res}  placeholder='Re-Enter the password' /><br />
        <Button variant="success" type='submit'>Register</Button><br />
        <Button variant='danger' type='reset'>Rest</Button>
        

    </form>
    </>
    )
}
