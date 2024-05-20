import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, EVENT_ENDPOINT } from '../constants/Constants';
import { getToken } from '../Services/userServices';
import { AuthContext } from './ContextAPI/authContext';


const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const {isAuthenticated} = useContext(AuthContext);
    const handleClick = (e)=>{
        e.preventDefault();
        // navigate(`/event/${event._id}`)
        console.log("ashdhb");
        axios.post(
          `${BASE_URL}/${EVENT_ENDPOINT}/registerForEvent`,
            {eventId:event._id},
            {headers:{'Authorization':`Bearer ${getToken()}`}
        }).then(response=>{
            console.log(response)
            if(response.status==200){
              event.numberOfSeats=event.numberOfSeats-1;
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    return(
  <Card className="h-100">
    <Card.Body className="d-flex flex-column">
      <div>
        <Card.Title>{event.eventName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{event.gameName}</Card.Subtitle>
        <Card.Text>
          <p>Location: <strong>{event.location}</strong><br />
          Date: <strong>{event.dateOfEvent}</strong><br />
          Time:<strong>{event.timeOfEvent}</strong><br />
            Seats Available:<strong> {event.numberOfSeats} </strong><br /></p> 

        </Card.Text>
      </div>
      {(isAuthenticated&& event.numberOfSeats>0) &&
      <Button variant="primary" className="mt-auto" onClick={handleClick}>Register Now</Button>
      }

    </Card.Body>
  </Card>)
};

export default EventCard;
