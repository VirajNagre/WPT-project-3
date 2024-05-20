import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASE_URL, EVENT_ENDPOINT } from '../Constants/constants.js';

const EventInfo = () => {
    const [eventInfo, setEventInfo] = useState([]);
    let { id } = useParams();
    useEffect(() => {
      axios.get(`${BASE_URL}/${EVENT_ENDPOINT}/${id}`)
        .then(response => {
            setEventInfo(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

  return (
    <Container>

    </Container>
  )
}

export default EventInfo