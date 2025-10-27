// @ts-nocheck
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import '../CSS/Details.css'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function BusDetails() {
    let [bus,setBus]=useState([]);
    let [state,setState]=useState(0);
    useEffect(()=>{
        axios.get("http://localhost:1007/Bus").then((res)=>{
            console.log(res);
            setBus(res.data)
        }).catch((bugs)=>{
            console.log(bugs);
        })
    },[state])
function deletes(id){
    axios.delete(`http://localhost:1007/Bus/${id}`).then((response)=>{
        console.log(response);
        setState(state+1);
        toast.success("Bus data removed successfully")
    }).catch((err)=>{console.log(err); toast.error("Bus data not removed")
    })
}
let nav=useNavigate();
function update(id){
nav(`/dashboard/update/${id}`)
}
    
    return (
    <>
            <h1>Bus Lists</h1>
            <div className="details">
                {bus.map((bus)=>{
                    return(<>
                    <div className="card">
                    <div className="img">
                        <img src={bus.image}  />
                    </div>
                    <div className="details">
                    <Link state={bus} to={`/dashboard/busInfo/${bus.id}`} style={{ textDecoration: 'none', color: 'inherit' }} ><h1>Bus no : {bus.no}|| name : {bus.name}</h1></Link>
                        
                        <h3>Departure : {bus.from}||Destination: {bus.to}</h3>
                        <h3>Seats Available:{bus.seats}|| Date :{bus.date}</h3>
                        <Button variant="outline-primary" onClick={()=>{update(bus.id)}}>Update</Button>
                        <Button variant="outline-danger" onClick={()=>{deletes(bus.id)}}>Delete</Button>
                        </div>
                    </div>
                    </>)
                })}
            </div>
        </>
    )
}
