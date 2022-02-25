import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import '../styles/HomeSection.css';

export default function LeftContainer() {
  return (
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
  );
}
