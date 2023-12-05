import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "IoT Certification Training on Azure",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1551437392/img/co_img_491_1522328952.png",
  },

  {
    id: "03",
    title: "Salesforce Admin 201 Certification Training",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl : "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1551437392/img/co_img_785_1549090705.png",
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                “Unlock your potential with our comprehensive training courses,
designed to empower you with the skills you need.”
                </p>
              </div>

              <div className="see w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
