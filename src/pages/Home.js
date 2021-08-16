import React, { Component } from "react";
import "../css/page.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import coinbase from "../../public/images/coinbase.png";
import quicktab from "../../public/images/quicktab.png";
import meraki from "../../public/images/meraki.png";
import barnacle from "../../public/images/barnacle.jpg";
import Emoji from "react-apple-emojis";
class Home extends Component {
  constructor(props) {
    super(props);

    this.onCoinbaseClick = this.onCoinbaseClick.bind(this);
    this.onBarnacleClick = this.onBarnacleClick.bind(this);
    this.onDyneClick = this.onDyneClick.bind(this);
  }

  onCoinbaseClick() {
    const url = "https://www.coinbase.com/";
    window.open(url, "_blank");
  }

  onBarnacleClick() {
    const url = "https://www.brnkl.io/";
    window.open(url, "_blank");
  }

  onDyneClick() {
    const url = "https://dyne.in/";
    window.open(url, "_blank");
  }

  onMerakiClick() {
    const url = "https://meraki.cisco.com/";
    window.open(url, "_blank");
  }

  render() {
    var frontEnd = [
      "React",
      "Redux",
      "Angular",
      "Ionic",
      "Javascript",
      "Typescript",
      "HTML",
      "CSS",
      "Sass",
      "Bootstrap",
    ];
    var backEnd = [
      "Java",
      "Go",
      "Ruby",
      "C#",
      "C",
      "Unity",
      "Node.js",
      "NoSQL",
      "SQL",
      "Google Cloud Functions",
      "AWS",
      "REST",
    ];
    var testing = [
      "Git",
      "Stripe API",
      "ReactiveX API",
      "Pandas Library",
      "Jest",
      "Circle CI",
      "Jira",
      "Docker",
    ];

    function renderSkills(array) {
      var elements = [];
      for (let i = 0; i < array.length; i++) {
        elements.push(
          <p className="bullet">
            <span>&#8226;</span> {array[i]}
          </p>
        );
      }

      return elements;
    }
    return (
      <Container fluid className="content-background">
        <Col>
          <h1 className="title">
            <Emoji
              className="emoji"
              name="waving-hand-medium-light-skin-tone"
              width={36}
            />{" "}
            Hello!
          </h1>
          <p className="bullet">
            <span>&#8226;</span> Note: This website is currently under
            construction and will be optimized for all screen sizes in the
            future.
          </p>
          <p className="bullet">
            <span>&#8226;</span> My name is Tanreet Dhaliwal and I am a third
            year software enginering student at Western University, graduating
            in April of 2022.
          </p>
          <p className="bullet">
            <span>&#8226;</span> I enjoy building seamless full stack software
            products that make a positive impact on the world around me.
          </p>
          <p className="bullet">
            <span>&#8226;</span> I will have obtained{" "}
            <b>16 months of professional experience</b> through 4 software
            engineering internshps as of December 2021.
          </p>
          <p className="bullet">
            <span>&#8226;</span> I am currently interning at{" "}
            <b>Cisco Meraki,</b> on the Meraki Vision Cameras team in Fall 2021.
          </p>
          <p className="bullet">
            <span>&#8226;</span> I am seeking full time SWE engineering roles in
            full stack or mobile development starting May 2022.
          </p>
          <h3 className="subtitle">
            <Emoji className="emoji" name="panda" width={30} /> Fun Facts
          </h3>
          <p className="bullet">
            <span>&#8226;</span> I am passionate about creating opportunities
            for STEM education for youth globally.
          </p>
          <p className="bullet">
            <span>&#8226;</span> I have organized over 197 robotics events in my
            local and international community to spread my passion for STEM.
          </p>
          <p className="bullet">
            <span>&#8226;</span> I won the{" "}
            <b>FIRST Robotics International Deans List Award (20/138,000)</b>{" "}
            for my technical expertise and positive impact on my international
            community.
          </p>
          <p className="bullet">
            <span>&#8226;</span> In my free time you can find me trying out a
            new recipe or watching panda videos.
          </p>
          <h3 className="subtitle">
            <Emoji
              className="emoji"
              name="woman-technologist-light-skin-tone"
              width={30}
            />{" "}
            Internships
          </h3>
          <Row>
            <Col>
              <Button className="company-logo" onClick={this.onMerakiClick}>
                <img
                  alt="Media cannot be displayed"
                  className="logo"
                  src={meraki}
                />
              </Button>
            </Col>
            <Col>
              <Button className="company-logo" onClick={this.onCoinbaseClick}>
                <img
                  alt="Media cannot be displayed"
                  className="logo"
                  src={coinbase}
                />
              </Button>
            </Col>
            <Col>
              <Button className="company-logo" onClick={this.onBarnacleClick}>
                <img
                  alt="Media cannot be displayed"
                  className="logo"
                  src={barnacle}
                />
              </Button>
            </Col>
            <Col>
              <Button className="company-logo" onClick={this.onDyneClick}>
                <img
                  alt="Media cannot be displayed"
                  className="logo"
                  src={quicktab}
                />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="subtitle">
                <Emoji className="emoji" name="artist-palette" width={30} />{" "}
                Front End Skills
              </h3>
              {renderSkills(frontEnd)}
            </Col>
            <Col>
              <h3 className="subtitle">
                <Emoji className="emoji" name="hammer-and-pick" width={30} />{" "}
                Back End Skills
              </h3>
              {renderSkills(backEnd)}
            </Col>
            <Col>
              <h3 className="subtitle">
                <Emoji className="emoji" name="laptop" width={30} /> Other Tools
                and Testing
              </h3>
              {renderSkills(testing)}
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Home;
