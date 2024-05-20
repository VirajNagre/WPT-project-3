import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { BASE_URL, EVENT_ENDPOINT } from '../constants/constants.js';
import EventCard from './EventCard.js';
import { Container, Row, Col } from 'react-bootstrap';
=======
import { BASE_URL,EVENT_ENDPOINT } from "../Constants/constants.js";
import {useState,useEffect} from 'react';
import EventCard from './EventCard.js'
>>>>>>> 8fc5c1a706c81b2a58c3169b192149c15e6d4b75

function AllEventsComponent() {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/${EVENT_ENDPOINT}/`)
      .then(response => {
        setAllEvents(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  return (
    <Container>
      <Row>
        {allEvents.length > 0 ? (
          allEvents.map(event => (
            <Col key={event._id} xs={12} sm={6} md={4} lg={3}>
              <EventCard event={event} />
            </Col>
          ))
        ) : (
          <p>No events available</p>
        )}
      </Row>
    </Container>
  );
}

export default AllEventsComponent;
