import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselComponent from './CarouselComponent.js';
import AllEventsComponent from './AllEventsComponent.js'

export const Home = () => {
  return (
    <>
      <section>
        {/* <CarouselComponent /> */}
      </section>
      <section className="container">
        <h2>Live Events</h2>
        <div>
            <AllEventsComponent />
        </div>
      </section>
    </>
  );
};

export default Home;
