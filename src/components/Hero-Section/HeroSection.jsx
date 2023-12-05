import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>

        
          <Col lg="6" md="6">
            <div className="hero__content">
              <h1 className="mb-4 hero__title">
              <span className="learn size text">Learn From </span><br /><span className="the size">the </span> <br /><span className="masters size">Masters. </span> 
              </h1>
              <p className="para mb-5">
              Learntos can help you advance your IT career!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            {/* <img src={heroImg} alt="" className="w-100 hero__img" /> */}
            <div className="hero_img">
            <img  src="https://img.freepik.com/free-photo/cute-asian-woman-studying-laptop-smiling-standing-against-yellow-wall_231208-13156.jpg" alt="" className="w-100 hero__img" />
            </div>
          </Col>

          
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
