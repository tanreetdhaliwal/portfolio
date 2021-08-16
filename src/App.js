import React, { Component } from 'react';
import Home from './pages/Home'
import Navigation from './components/Sidebar'
import {Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './pages/Work'
import Projects from './pages/Projects'
import Volunteer from './pages/Volunteer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col md={2}> 
              <Navigation />
            </Col>
            <Col md={10}>
            <Row className="section"><Home /></Row>
            <Row><Work /></Row>
            <Row><Projects /></Row>
            <Row><Volunteer /></Row>
            </Col> 
            </Row>
            </Container>
      </div>
    );
  }
}

export default App;
