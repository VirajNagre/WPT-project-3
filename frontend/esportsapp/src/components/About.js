import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

export const About = () => {
    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <h2 className="text-center">Mission</h2>
                    <img src={"https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Mission" className="img-fluid my-3 rounded"/>
                    <p className="text-justify">
                    "Our mission is to empower esports teams and organizations by providing comprehensive management tools that streamline operations, enhance performance, and foster growth within the competitive gaming community. We are dedicated to innovation, excellence, and the success of our users, ensuring that every aspect of esports management is efficient, effective, and engaging.We are dedicated to nurturing the talents of tomorrow by providing educational resources, mentorship programs, and opportunities for aspiring gamers and esports enthusiasts to learn, grow, and thrive within the industry." 
                    </p>
                </Col>
                <Col lg={6} border="primary">
                    <h2 className="text-center">Vision</h2>
                    <img src={"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Mission" className="img-fluid my-3 rounded"/>
                    <p className="text-justify">
                    "Envision a world where every gamer's passion is elevated to professional standards. Our esports management web application is the cornerstone of this vision, a digital arena where players, teams, and organizers converge to elevate their gameplay and amplify their impact. Seamlessly blending cutting-edge technology with intuitive design, our platform revolutionizes the esports experience. From dynamic tournament creation to robust team management, from personalized player scouting to immersive match streaming, we empower users to forge their path to greatness. Together, we're shaping the future of esports, fostering a global community united by competition, camaraderie, and a shared love for gaming. Join us as we embark on this exhilarating journey, where every click brings us closer to unlocking the full potential of esports excellence." 
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;