import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { getToken } from '../Services/userServices';
import axios from 'axios';
import { BASE_URL, EVENT_ENDPOINT } from '../Constants/Constants';
const NewEventPage = () => {

    const [formData,setFormData] = useState();
    const handleFieldChange = (e) =>{
        e.preventDefault();
        if([e.target.name]=="dateOfEvent"){
            // if(e.target.value < )
                console.log(e.target.value)
        }
        setFormData({...formData, [e.target.name]:e.target.value })
        console.log(formData);
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        let url = `${BASE_URL}/${EVENT_ENDPOINT}/newEvent`;
        const response = axios.post(url,formData,{
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                  }
            }
        )
        console.log(response);
    }

    return (
        <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Give a classy name for your event"
              name="eventName"
            //   value={formData.eventName}
              onChange={handleFieldChange}
            />
          </Row>
          <Row className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe your event. Let everyone know if you have any rules, requirements"
              name="description"
            //   value={formData.description}
              onChange={handleFieldChange}
            />
          </Row>
          <Row className="mb-3">
            <Form.Label>Game Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Which game will you be playing?"
              name="gameName"
            //   value={formData.gameName}
              onChange={handleFieldChange}
            />
          </Row>
          <Row className="mb-3">
            <Form.Label>Number of Slots</Form.Label>
            <Form.Control
              type="number"
              placeholder="How many players can play?"
              name="numberOfSeats"
            //   value={formData.numberOfSeats}
              onChange={handleFieldChange}
            />
          </Row>

          <Row className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Where?"
              name="location"
            //   value={formData.location}
              onChange={handleFieldChange}
            />
          </Row>
          <Row className="mb-3">
          <Col className='p-0'>
            <Form.Label>Date of Event</Form.Label>
            <Form.Control
              type="date"
              name="dateOfEvent"
              //   value={formData.dateOfEvent}
              onChange={handleFieldChange}
              />
          {/* </Row> */}
            </Col>
            <Col>
          {/* <Row className="mb-3"> */}
            <Form.Label>Start Time</Form.Label>
            
            <Form.Control
              type="time"
              name="startTime"
              //   value={formData.startTime}
              onChange={handleFieldChange}
              />
              </Col>
          {/* </Row>
          <Row className="mb-3"> */}
          <Col>
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="time"
              name="endTime"
              //   value={formData.endTime}
              onChange={handleFieldChange}
              />
              </Col>
          </Row>
          {/* <Row className="mb-3">
            <Form.Check
              type="checkbox"
              label="Is Active"
              name="isActive"
            //   checked={formData.isActive}
              onChange={handleFieldChange}
            />
          </Row> */}
          <Button type="submit" className='w-100 bg-danger mt-5' >Lets Go!!</Button>
        </Form>
        </Container>
      );
    };

export default NewEventPage