import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, EVENT_ENDPOINT } from '../constants/constants';

const EventCard = ({ event }) => {
    const navigate = useNavigate();

    const handleClick = (e)=>{
        e.preventDefault();
        // navigate(`/event/${event._id}`)
        axios.post(`${BASE_URL}/${EVENT_ENDPOINT}/registerForEvent`,{
            eventId:event._id,
        }).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err);
        })
        // alert()
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
      <Button variant="primary" className="mt-auto" onClick={handleClick}>Register Now</Button>
    </Card.Body>
  </Card>)
};

export default EventCard;
