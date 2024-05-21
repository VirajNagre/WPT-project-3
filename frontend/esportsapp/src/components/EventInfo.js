import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL, EVENT_ENDPOINT } from "../Constants/Constants.js";
import { AuthContext } from "./ContextAPI/authContext.js";
import { getToken, getUserInfo } from "../Services/userServices.js";

const EventInfo = () => {
  const { isAuthenticated, registerEvent, userInfo } = useContext(AuthContext);

  const navigate = useNavigate();

  const [event, setEventInfo] = useState();
  const [seatCount, setSeatCount] = useState();
  const [isRegistered,setIsRegistered] = useState(false);

  const { id } = useParams();
  // console.log(id);

  // console.log("userInfo from eventinfo ",userInfo,"event - ",event)

  const getData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${EVENT_ENDPOINT}/${id}`);
      // console.log("response",response.data.eventInfo[0])
      setEventInfo(response.data.eventInfo[0]);
      setSeatCount(response.data.eventInfo[0].numberOfSeats);
    } catch (err) {
      // setError(err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    console.log("userInfo from eventinfo\n",userInfo);
    let unfo;
    if (isAuthenticated) {
      unfo = JSON.parse(getUserInfo());
      console.log("kay re babaaaa----------", unfo, typeof unfo);
      setIsRegistered(unfo?.registeredEvents.includes(id));
    }
  }, []);

  // const seatCount = event.numberOfSeats;

  const handleClick = () => {
    // alert("oaojsjdnsj");
    if (isAuthenticated && event.numberOfSeats > 0) {
      // Handle registration logic here
      axios
        .post(
          `${BASE_URL}/${EVENT_ENDPOINT}/registerForEvent`,
          { eventId: event._id },
          { headers: { Authorization: `Bearer ${getToken()}` } }
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            console.log("Registered successfully!");
            setSeatCount(seatCount - 1);
            console.log(event._id);
            registerEvent(event._id);
            console.log("Registered successfully!");
            setIsRegistered(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const navigateToEvent = () => {
    navigate(`/event/${event._id}`);
  };

  if (!event) {
    return <>Loading</>;
  }

  return (
    <Container className="mt-5">
      <Card className="h-100 pointer-cursor" onClick={navigateToEvent}>
        <Card.Body className="d-flex flex-column">
          <div>
            <h1>{event.eventName}</h1>
            <Card.Subtitle className="mb-2 text-muted">
              {event.gameName}
            </Card.Subtitle>
            <Card.Text>
              <p>
                Location: <strong>{event.location}</strong>
                <br />
                Date:{" "}
                <strong>
                  {new Date(event.dateOfEvent).toLocaleDateString()}
                </strong>
                <br />
                Time:{" "}
                <strong>
                  {new Date(event.dateOfEvent).toLocaleTimeString()}
                </strong>
                <br />
                Seats Available: <strong>{seatCount}</strong>
                <br />
              </p>
            </Card.Text>
          </div>
          {/* {isAuthenticated && (

            (event.numberOfSeats > 0) ? (
              <Button variant="primary" className="mt-auto" onClick={handleClick}>Register Now</Button>
            ) : (
              <Button variant="secondary" className="mt-auto" disabled>Slots Full</Button>
            }
          )} */}

          {isAuthenticated &&
            (event.numberOfSeats > 0 ? (
              <Button
                variant="primary"
                className="mt-auto"
                onClick={handleClick}
                disabled={isRegistered}
              >
                {isRegistered ? "You are already registered" : "Register Now"}
              </Button>
            ) : (
              <Button variant="secondary" className="mt-auto" disabled>
                Slots Full
              </Button>
            ))}
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header>Participants</Card.Header>
        <ListGroup variant="flush">
          {event.participants.map((participant) => (
            <ListGroup.Item key={participant._id}>
              {participant.FirstName} {participant.LastName}{" "}
              {participant.InGameName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default EventInfo;
