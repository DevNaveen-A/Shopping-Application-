import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import '../CSS/ViewBus.css'
import { toast } from 'react-toastify';

export default function ViewBus() {
    let loc=useLocation();
    let b=loc.state;
    console.log(b);
    function congrats(){
        toast.success("Registration successful! Thank for choosing us!");
    }
    return (
    <div>
        <h1>Bus details</h1>
        <div className="car">
                    <div className="im">
                        <img src={b.image}  />
                    </div>
                    <div className="detail">
                        <h1>Bus no : {b.no}</h1><h1> name : {b.name}</h1>
                        <h3>Departure : {b.from}</h3><h3>Destination: {b.to}</h3>
                        <h3>Seats Available:{b.seats}</h3><h3> Date :{b.date}</h3>
                        <h1>Breif Details</h1>
                        <p>Need to get from {b.from} to {b.to} on {b.date} fast, fresh, and fuss-free? {b.name} is your answer. Known for its punctuality and sleek design, this ride comes with mobile charging ports, spacious seats, and a vibe that says “we’ve got you.” It’s the favorite of commuters who value time and comfort equally.
</p>
                        </div>
                        <Button variant="primary" onClick={congrats}> Register trip</Button>
                    </div>
    </div>
    )
}
