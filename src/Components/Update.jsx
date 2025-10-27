import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ToastHeader } from 'react-bootstrap';
import {  useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Update() {
    let [bus, setBus] = useState({
        no: "", name: "", image: "", from: "", to: "", date: "", seats: ""});
    let para = useParams();
    console.log(para.id);
    useEffect(() => {
        axios.get(`http://localhost:1007/Bus/${para.id}`).then((resp) => {
            console.log(resp.data);
            setBus(resp.data);

        }).catch((err) => {
            console.log(err);
        })
    },[])
    function resp(e){
        let {value,name}=e.target;
        // @ts-ignore
        setBus((preValue)=>({...preValue,[name]:value}));
    }
    
    function update(e){
        e.preventDefault();
        axios.put(`http://localhost:1007/Bus/${para.id}`,bus).then((res)=>{
            console.log(res);
            toast.success("Bus data updated successfully")
        }).catch((err)=>{
            console.log(err);
            toast.error("Bus data not updated")
        })
    }

    return (

        <>
            <h1>Update Details of Bus</h1>
            <form action="" autoComplete='off' onSubmit={update}>
                <label htmlFor="">Bus NO:</label><br />
                <input type="number" required name="no" value={ bus.no } onChange={ resp } placeholder='Enter the bus number' /><br />
                <label htmlFor="">Bus Name:</label>
                <input type="text" required name="name" value={ bus.name } onChange={ resp } placeholder='Enter the bus name' /><br />
                <label htmlFor="">Bus Image:</label>
                <input type="text" required name="image" value={ bus.image } onChange={ resp } placeholder='Enter the bus image in url format' />
                <label htmlFor="">From:</label>
                <input type="text" required name="from" value={ bus.from } onChange={ resp } placeholder='Enter the location' /><br />
                <label htmlFor="">To:</label>
                <input type="text" required name="to" value={ bus.to } onChange={ resp } placeholder='Enter teh destination ' /><br />
                <label htmlFor="">Date:</label>
                <input type="date" required name="date" value={ bus.date } onChange={ resp } placeholder='Enter the Date Of bus Departure' /><br />
                <label htmlFor="">No. of Seats:</label>
                <input type="number" required name="seats" value={ bus.seats } onChange={ resp } placeholder='Enter the number of seats' /> <br />
                <Button type='submit' variant="outline-success">Update Bus</Button>

            </form>
        </>
    )
}
