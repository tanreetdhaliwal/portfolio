import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import "../css/sidebar.css";
import profile from "../../public/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Sticky from "react-stickynode";
import resume from "../documents/tanreet-dhaliwal-resume.pdf";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.onResumeClick = this.onResumeClick.bind(this);
    this.onLinkedInClick = this.onLinkedInClick.bind(this);
    this.onWebsiteClick = this.onWebsiteClick.bind(this);
    this.onMailClick = this.onMailClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.listenToScroll = this.listenToScroll.bind(this);
    this.state = { home: true, work: false, projects: false, volunteer: false };
  }

  onResumeClick() {
    window.open(resume);
  }

  onLinkedInClick() {
    const url = "https://www.linkedin.com/in/tanreet-dhaliwal/";
    window.open(url, "_blank");
  }

  onWebsiteClick() {
    const url = "https://github.com/tanreetdhaliwal";
    window.open(url, "_blank");
  }

  onMailClick() {
    window.open("mailto:tdhali@uwo.ca");
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    if (scrolled < 0.19) {
      this.setState({
        home: true,
        work: false,
        projects: false,
        volunteer: false,
      });
    } else if (scrolled >= 0.19 && scrolled < 0.41) {
      this.setState({
        home: false,
        work: true,
        projects: false,
        volunteer: false,
      });
    } else if (scrolled >= 0.41 && scrolled < 0.66) {
      this.setState({
        home: false,
        work: false,
        projects: true,
        volunteer: false,
      });
    } else {
      this.setState({
        home: false,
        work: false,
        projects: false,
        volunteer: true,
      });
    }
  };

  render() {
    return (
      <Sticky>
        <Nav
          className="col-md-12 d-md-block sidebar"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <div className="header-text">
            <img
              alt="Media cannot be displayed"
              className="circle"
              src={profile}
            />
            <h5 className="header">Tanreet Dhaliwal</h5>
            <p className="bio">
              <b>Junior SWE Student</b>
            </p>
            <p className="bio">
              Software Engineering Intern <br /> at Coinbase
            </p>
          </div>
          <Nav.Item>
            <Nav.Link
              className={this.state.home === true ? "active" : "non-active"}
              href="/home"
            >
              <FontAwesomeIcon icon={faHome} />
              &nbsp;&nbsp;&nbsp;&nbsp;Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={this.state.work === true ? "active" : "non-active"}
            >
              <FontAwesomeIcon icon={faBriefcase} />
              &nbsp;&nbsp;&nbsp;&nbsp;Work Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={this.state.projects === true ? "active" : "non-active"}
            >
              <FontAwesomeIcon icon={faCode} />
              &nbsp;&nbsp;&nbsp;&nbsp;Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                this.state.volunteer === true ? "active" : "non-active"
              }
            >
              <FontAwesomeIcon icon={faHeart} />
              &nbsp;&nbsp;&nbsp;&nbsp;Volunteering
            </Nav.Link>
          </Nav.Item>
          <div className="buttons">
            <button onClick={this.onResumeClick} className="curved-button">
              Download Resume
            </button>
            <br />
            <button
              onClick={this.onLinkedInClick}
              className="social-media-button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
            &nbsp;&nbsp;
            <button
              onClick={this.onWebsiteClick}
              className="social-media-button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </button>
            &nbsp;&nbsp;
            <button onClick={this.onMailClick} className="social-media-button">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </Nav>
      </Sticky>
    );
  }
}

export default Navigation;
