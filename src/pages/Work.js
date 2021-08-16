import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import "../css/work.css";
import "../css/page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Emoji from "react-apple-emojis";
class Work extends Component {
  render() {
    return (
      <Container fluid className="content-background">
        <Col>
          <h1 className="title section-padding">
            <Emoji className="emoji" name="briefcase" width={36} /> Work
            Experience
          </h1>
          <h3 className="firstsubheader subheader">
            <Emoji className="emoji" name="money-bag" width={30} /> Coinbase
          </h3>
          <p className="intern">
            <b>Software Engineering Intern</b>
          </p>
          <p className="date">May 2021 to August 2021</p>
          <p className="city">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;San Fransisco, CA
          </p>
          <p className="bullet">
            <span>&#8226;</span> Currently interning at the largest US
            cryptocurrency exchange on Retail Card team
          </p>
          <h3 className="subheader">
            <Emoji className="emoji" name="speedboat" width={30} /> Barnacle
            Systems
          </h3>
          <p className="intern">
            <b>Software Developer Intern</b>
          </p>
          <p className="date">September 2020 to December 2020</p>
          <p className="city">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;Victoria, BC
          </p>
          <p className="bullet">
            <span>&#8226;</span> Improved user experience on marine security
            monitoring web app by implementing a new end-to-end battery feature
            that allows customers to view current status levels of sensors on
            boats
          </p>
          <p className="bullet">
            <span>&#8226;</span> Constructed API endpoints with Node.js and
            Express to support product deletions/resets across backend database
          </p>
          <p className="bullet">
            <span>&#8226;</span> Worked on an automated command line interface
            tool by transferring configuration data from a HTTP web request onto
            firmware to decrease installation time for customers and augment
            developer productivity
          </p>
          <p className="bullet">
            <span>&#8226;</span> Wrote automated tests in Jest and created
            documentation for all backend APIs to simplify developer onboarding
          </p>
          <h3 className="subheader">
            <Emoji className="emoji" name="spaghetti" width={30} /> Quicktab
            Technologies
          </h3>
          <p className="intern">
            <b>Software Engineering Intern</b>
          </p>
          <p className="date">April 2020 to August 2020</p>
          <p className="city">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;Toronto, ON
          </p>
          <p className="bullet">
            <span>&#8226;</span> Developed contactless dining platform
            consisting of a React web app and iOS native app from scratch for 2
            restaurants
          </p>
          <p className="bullet">
            <span>&#8226;</span> Designed the system architecture, application
            flow, UI interfaces and core end-to-end user facing features
          </p>
          <p className="bullet">
            <span>&#8226;</span> Created fully responsive front end screens with
            modal views, animations and reusable components
          </p>
          <p className="bullet">
            <span>&#8226;</span> Executed asynchronous data queries to retrieve
            live customer orders from database while reducing read/write
            operations by 60% to ensure efficient scaling on backend
          </p>
          <p className="bullet">
            <span>&#8226;</span> Remodelled state architecture in Redux to
            increase code reusability and improve data flow across entire
            application
          </p>
          <p className="bullet">
            <span>&#8226;</span> Programmed an algorithm for a table status
            indicator that changes colour based on live order status for waiters
          </p>
          <p className="bullet">
            <span>&#8226;</span> Utilized Swift storyboards to build multiple
            table view screens and set up app navigation on iOS native app
          </p>
          <h3 className="subheader">
            <Emoji className="emoji" name="books" width={30} /> Ivey Business
            School Digital Banking Lab
          </h3>
          <p className="intern">
            <b>Research Assistant</b>
          </p>
          <p className="date">May 2019 to June 2019</p>
          <p className="city">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;London, ON
          </p>
          <p className="bullet">
            <span>&#8226;</span> Conducted research analyses of 150+ Fintech
            startups to establish a prediction model for success
          </p>
          <p className="bullet">
            <span>&#8226;</span> Automated research processes using Python to
            reduce time by 95% and increase data mining accuracy
          </p>
          <div className="last"></div>
        </Col>
      </Container>
    );
  }
}

export default Work;
