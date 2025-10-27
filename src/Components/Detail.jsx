// @ts-nocheck
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import '../CSS/Details.css'
import { Link } from 'react-router-dom';

export default function BusDetails() {
    let [bus,setBus]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1007/Bus").then((res)=>{
            console.log(res);
            setBus(res.data)
        }).catch((bugs)=>{
            console.log(bugs);
        })
    },[])
    
    return (
    <>
            <h1>Bus details</h1>
            <div className="details">
                {bus.map((bus)=>{
                    return(<>
                    <div className="card">
                    <div className="img">
                        <img src={bus.image}  />
                    </div>
                    <div className="details">
                        <Link state={bus} to={`/userDb/viewBus/${bus.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1>Bus no : {bus.no}|| name : {bus.name}</h1></Link>
                        <h3>Departure : {bus.from}||Destination: {bus.to}</h3>
                        <h3>Seats Available:{bus.seats}|| Date :{bus.date}</h3>
                        </div>
                    </div>
                    </>)
                })}
            </div>
        </>
    )
}
