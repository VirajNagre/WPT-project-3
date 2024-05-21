import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item style={{ height: '75vh' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img
            src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='img-fluid w-100 h-auto' 
            style={{ objectFit: 'cover' }} 
            alt='First slide'
          />
        </div>
        <Carousel.Caption>
          <h1 className='text-white'>PlayConnect</h1>
          <p>For young by young</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item style={{ height: '75vh' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img
            src='https://images.squarespace-cdn.com/content/v1/58cab9aa17bffc68fcce98e9/1489693113118-0KF18LKWD0XWJ2VR2CX1/Luau_Main_Court_15.jpg'
            className='img-fluid w-100 h-auto' 
            style={{ objectFit: 'cover' }} 
            alt='First slide'
          />
        </div>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;



