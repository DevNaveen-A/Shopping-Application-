import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../CSS/RegBus.css'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function RegBus() {
  let [bus,setBus]=useState({
    no:"",name:"",image:"" ,from:"",to:"",date:"",seats:""
  });
  function resp(e){
    let {value,name}=e.target;
    setBus((preValue)=>({...preValue,[name]:value}));
  }
  // console.log(bus);
  function resetForm() {
  setBus({ no: "", name: "", image: "", from: "", to: "", date: "", seats: "" });
}
  function Register_bus(e){
    e.preventDefault();
    axios.post('http://localhost:1007/Bus',bus)
    .then((register)=>{console.log(register);
      toast.success("Registration successful");
      resetForm();
    }).catch((bug)=>{
      console.log(bug);
      toast.error("Registration failed");
      
    })
  }
  
  
  return (
    <div>
<h1>Register Bus</h1>
<form action="" onSubmit={Register_bus} autoComplete='off'>
  <label htmlFor="">Bus NO:</label><br />
  <input type="number" required name="no" value={bus.no} onChange={resp} placeholder='Enter the bus number' /><br />
  <label htmlFor="">Bus Name:</label>
  <input type="text" required name="name" value={bus.name} onChange={resp}placeholder='Enter the bus name' /><br />
  <label htmlFor="">Bus Image:</label>
  <input type="text" required name="image" value={bus.image} onChange={resp} placeholder='Enter the bus image in url format' />
  <label htmlFor="">From:</label>
  <input type="text" required name="from" value={bus.from} onChange={resp}placeholder='Enter the location' /><br />
  <label htmlFor="">To:</label>
  <input type="text"required name="to" value={bus.to} onChange={resp} placeholder='Enter teh destination ' /><br />
  <label htmlFor="">Date:</label>
  <input type="date" required name="date" value={bus.date} onChange={resp} placeholder='Enter the Date Of bus Departure' /><br />
  <label htmlFor="">No. of Seats:</label>
  <input type="number" required name="seats" value={bus.seats} onChange={resp} placeholder='Enter the number of seats' /> <br />
  <Button type='submit' variant="outline-success">Register Bus</Button>
  <Button type='reset' variant='danger'>Reset</Button>
</form>
    </div>
  )
}
