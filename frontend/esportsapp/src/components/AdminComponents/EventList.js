import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { BASE_URL, EVENT_ENDPOINT } from '../../Constants/Constants.js';


export const EventList = ({ events, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Event Name</th>
          <th>Description</th>
          <th>Game Name</th>
          <th>Location</th>
          <th>Number of Seats</th>
          <th>Date of Event</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={event._id}>
            <td>{index + 1}</td>
            <td>{event.eventName}</td>
            <td>{event.description}</td>
            <td>{event.gameName}</td>
            <td>{event.location}</td>
            <td>{event.numberOfSeats}</td>
            <td>{new Date(event.dateOfEvent).toLocaleString()}</td>
            {/* <td>{event.eventHost.id}</td> */}
            <td>
              <Button variant="danger" onClick={() => onDelete(event._id)}>Delete</Button>
            
              </td> 
            {/* 
            */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};


export default EventList;
