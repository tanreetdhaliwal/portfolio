import React, { Component } from "react";
import "../css/page.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import wie1 from "../../public/images/wie1.jpeg";
import wie2 from "../../public/images/wie2.jpeg";
import wie3 from "../../public/images/wie3.jpeg";
import local1 from "../../public/images/local1.jpg";
import local2 from "../../public/images/local2.jpg";
import local3 from "../../public/images/local3.jpg";
import national1 from "../../public/images/national1.jpg";
import national2 from "../../public/images/national2.jpg";
import national3 from "../../public/images/national3.jpg";
import charity1 from "../../public/images/charity1.jpg";
import charity2 from "../../public/images/charity2.jpg";
import charity3 from "../../public/images/charity3.jpg";
import Emoji from "react-apple-emojis";

class Volunteer extends Component {
  render() {
    return (
      <Container fluid className="content-background">
        <Col>
          <h1 className="title">
            <Emoji className="emoji" name="globe-showing-americas" width={36} />{" "}
            Volunteering
          </h1>
          <h3 className="firstsubheader subheader">
            <Emoji
              className="emoji"
              name="woman-mechanic-light-skin-tone"
              width={30}
            />{" "}
            Women In Engineering
          </h3>
          <p className="intern">
            <b>Outreach Executive and Member</b>
          </p>
          <p className="date space10">September 2018 - Present</p>
          <p className="city">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;London, ON
          </p>
          <p className="bullet">
            <span>&#8226;</span> Helped organize networking sessions, annual
            brunch social and mentorship events for female enginering community
            on University campus.
          </p>
          <p className="bullet">
            <span>&#8226;</span> Hosted interactive workshops at GO Eng Girl and
            GO Code Girl for youth for weekend event at Western University.
          </p>
          <Row>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={wie1}
              />
            </Col>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={wie2}
              />
            </Col>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={wie3}
              />
            </Col>
          </Row>
          <h3 className="subheader">
            <Emoji className="emoji" name="robot" width={30} /> Local Robotics
            Camps
          </h3>
          <p className="intern">
            <b>Organizer</b>
          </p>
          <p className="date space10">September 2015 - April 2018</p>
          <p className="city">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;Mississauga, ON
          </p>
          <p className="bullet">
            <span>&#8226;</span> Organized robotics camps by writing curriciulm
            and planning logistics for over 700+ youth by patnering with 6 local
            organizations.
          </p>
          <Row>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={local1}
              />
            </Col>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={local2}
              />
            </Col>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={local3}
              />
            </Col>
          </Row>
          <h3 className="subheader">
            <Emoji className="emoji" name="airplane" width={30} /> International
            Robotics Workshops
          </h3>
          <p className="intern">
            <b>Organizer</b>
          </p>
          <p className="date space10">September 2017 - April 2018</p>
          <p className="city">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;India
          </p>
          <p className="bullet">
            <span>&#8226;</span> Hosted robotics workshops in India by
            partnering with 3 schools to create access to STEM education
            opportunities.
          </p>
          <Row>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={national1}
              />
            </Col>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={national2}
              />
            </Col>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={national3}
              />
            </Col>
          </Row>
          <h3 className="subheader">
            <Emoji className="emoji" name="puzzle-piece" width={30} /> STEM
            Charity Drives for Local Community
          </h3>
          <p className="intern">
            <b>Organizer</b>
          </p>
          <p className="date space10">September 2017 - April 2018</p>
          <p className="city">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;Mississauga, ON
          </p>
          <p className="bullet">
            <span>&#8226;</span> Wrote my own STEM based coloring book for kids
            to donate to local library reading program.
          </p>
          <p className="bullet">
            <span>&#8226;</span> Created a board game to teach the fundamentals
            of programming and robot arts and crafts activity to donate to local
            hospital.
          </p>
          <Row>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={charity1}
              />
            </Col>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={charity2}
              />
            </Col>
            <Col>
              <img
                alt="Media cannot be displayed"
                className="img-fluid"
                src={charity3}
              />
            </Col>
          </Row>
          <div className="last"></div>
        </Col>
      </Container>
    );
  }
}

export default Volunteer;
