import React, { Component } from 'react';
import "../css/page.css"
import {Container, Row, Col } from "react-bootstrap";
import tatinder from '../../public/images/tatinder.png'
import Game from '../../public/images/Game.mp4'
import Courses from '../../public/images/Courses.mp4'
import Database from '../../public/images/Database.mp4'
import Emoji from 'react-apple-emojis'

class Projects extends Component {
    render() {
        return (
            <Container fluid className="content-background">
                <Col>
                <h1 className="title"><Emoji className="emoji" name="desktop-computer" width={36}/> Projects</h1>
                <Row>
                <Col>
                <h3 className="firstsubheader subheader"><Emoji className="emoji" name="pencil" width={30}/> TA Tinder</h3>
                <p className="intern"><b>React Full Stack CRUD App</b></p>
                <p className="date space10">Winter 2021 - In Progress</p>
                <p className="bullet"><span>&#8226;</span> Building an application that receives TA applications and produces optimal hour/position allocation based on various criteria using React and MongoDB (NoSQL)</p>
                <img alt="Media cannot be displayed" className="img-fluid" src={tatinder}/>
                </Col>
                <Col>
                <h3 className="firstsubheader subheader"><Emoji className="emoji" name="spiral-calendar" width={30}/> Course Scheduler</h3>
                <p className="intern"><b>Angular Full Stack CRUD App</b></p>
                <p className="date space10">Fall 2020</p>
                <p className="bullet"><span>&#8226;</span> Built a CRUD web app using Angular and LowDB (NoSQL) for searching courses, creating numerous scedhules and posting course reviews</p>
                <video src={Courses} controls="controls" className="img-fluid"></video>
                </Col>
                </Row>
                <Row>
                <Col>
                <h3 className="subheader"><Emoji className="emoji" name="magnifying-glass-tilted-right" width={30}/> Tutor Matching</h3>
                <p className="intern"><b>React Full Stack Database Project</b></p>
                <p className="date space10">Winter 2020</p>
                <p className="bullet"><span>&#8226;</span> Built a CRUD web app using React and MySQL (SQL) for tutor management system to book tutors for numerous sessions and post reviews</p>
                <video src={Database} controls="controls" className="img-fluid"></video>
                </Col>
                <Col>
                <h3 className="subheader"><Emoji className="emoji" name="video-game" width={30}/> Fredryck’s Frontier</h3>
                <p className="intern"><b>Unity Gaming Project</b></p>
                <p className="date space10">Winter 2020</p>
                <p className="bullet"><span>&#8226;</span> Built a platform style game in Unity using C# with three levels and minigames, inventory system, health bar and character customization features</p>
                <video src={Game} controls="controls" className="img-fluid"></video>
                </Col>
                </Row>
                <div className="last"></div>
                </Col>
            </Container>
        );
    }
}

export default Projects;