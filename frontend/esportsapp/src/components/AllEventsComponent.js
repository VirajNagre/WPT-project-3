import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { BASE_URL,EVENT_ENDPOINT } from "../Constants/constants.js";
import {useState,useEffect} from 'react';
import EventCard from './EventCard.js'

function AllEventsComponent() {

    const [allEvents, setAllEvents]=useState([])
    // let allEvents = [];
    useEffect(()=>{
        axios.get(`${BASE_URL}/${EVENT_ENDPOINT}/`, {
          })
          .then(function (response) {
            setAllEvents(response.data);
            // allEvents = response;
            console.log(allEvents);
          })
          .catch(function (error) {
            console.log(error);
          });
    },[])

    const fruits = ["Apple", "Mango", "Banana", "GFG"];
  return (
    <>
      {
        allEvents.length > 0 ? (
          allEvents.map((event, index) => (
            <EventCard props= {{event,index}} className ="d-flex"/>
          ))
        ) : (
          <p>No events available</p>
        )
      }

    {
        /*  This maps each array item to a div adds
        the style declared above and return it */
        fruits.map((fruit) => (
            <div key={fruit}>
                {fruit}
            </div>
        ))
    }
    

    </>
  );
}

export default AllEventsComponent;