import React, { useContext,useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, EVENT_ENDPOINT } from "../Constants/Constants.js";
import { getToken } from '../Services/userServices';
import { AuthContext } from './ContextAPI/authContext.js';


const EventCard = ({ event }) => {
    const navigate = useNavigate();

    const {isAuthenticated,userInfo,registerEvent} = useContext(AuthContext);

    const [seatCount, setSeatCount ]= useState(event.numberOfSeats);
    
    const handleClick = (e)=>{
        e.preventDefault();
        // navigate(`/event/${event._id}`)
        axios.post(
          `${BASE_URL}/${EVENT_ENDPOINT}/registerForEvent`,
            {eventId:event._id},
            {headers:{'Authorization':`Bearer ${getToken()}`}
        }).then(response=>{
            console.log(response)
            if(response.status==200){
              // event.numberOfSeats=event.numberOfSeats-1;
              setSeatCount(seatCount-1);
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
  <Card className="h-100" onClick={()=>navigate(`event/${event._id}`)} style={{ cursor: 'pointer' }}>
    <Card.Body className="d-flex flex-column">
      <div>
        <Card.Title>{event.eventName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{event.gameName}</Card.Subtitle>
        <Card.Text>
          <p>Location: <strong>{event.location}</strong><br />
          Date: <strong>{event.dateOfEvent}</strong><br />
          Time:<strong>{event.timeOfEvent}</strong><br />
            Seats Available:<strong> {seatCount} </strong><br /></p> 
          {event._id}

        </Card.Text>
      </div>


      <Button variant="primary" className="mt-auto" >
      Know More
    </Button>
    </Card.Body>
  </Card>)
};

export default EventCard;
