import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import image from '../assets/images/self3.png';
import '../styles/HomeSection.css';

export default function HomeSection() {
  return (
    <section className="container">
      <div className="leftContainer">
        <ul className="left-nav-item">
          <li className="left-icon">
            <NavLink exact to="/" className="left-icon">
              <FontAwesomeIcon className="lefticon" icon={faHome} />
              <span className="menu-content">Home</span>
            </NavLink>
          </li>
          <li className="left-icon">
            <NavLink exact to="/about" className="left-icon">
              <FontAwesomeIcon className="lefticon" icon={faUser} />
              <span className="menu-content">About</span>
            </NavLink>
          </li>
          <li className="left-icon">
            <NavLink exact to="/portfolio" className="left-icon">
              <FontAwesomeIcon className="lefticon" icon={faBriefcase} />
              <span className="menu-content">Portfolio</span>
            </NavLink>
          </li>
          <li className="left-icon">
            <NavLink exact to="/contact" className="left-icon">
              <FontAwesomeIcon className="lefticon" icon={faEnvelope} />
              <span className="menu-content">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="homeContainer">
        <img src={image} alt="Your_picture" className="shape" />
        <h1>Tanvir Ahmed.</h1>

        <p>
          I'a software developer. I'm specialised in C++,PHP,Js,ReactJs.
          <br />
          Now working on some projects using ReactJs
        </p>
        <ul className="socialIcons">
          <li>
            <a href="https://www.facebook.com/tanvirxchy">
              <FontAwesomeIcon className="iColor" icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tanvircancode/">
              <FontAwesomeIcon className="iColor" icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/tanvircancode">
              <FontAwesomeIcon className="iColor" icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="skype:Tanvir Ahmed Chowdhury?chat">
              <FontAwesomeIcon className="iColor" icon={faSkype} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
