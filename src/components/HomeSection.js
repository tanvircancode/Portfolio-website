import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faSkype
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../assets/images/self4.png';
import '../styles/HomeSection.css';


export default function HomeSection() {
  return (
    <div className="container">
      <div className="rightpart">
        <div className="rightpart-in">
          <div className="rightpart-p">
            <div className="rightpart-container">
              <div className="items">
                <div className="home-content">
                  <div className="avatar">
                    <img className="shape" src={image} alt="Your_picture" />
                  </div>
                  <div className="details">
                    <h1 className="name">Tanvir Ahmed.</h1>

                    <p className="job">
                      I'm a software developer. I'm specialised in C++,PHP,Js,ReactJs. Now working on some projects using
                      ReactJs.
                    </p>
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/tanvirxchy">
                          <FontAwesomeIcon
                            className="iColor"
                            icon={faFacebookF}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/tanvircancode/">
                          <FontAwesomeIcon
                            className="iColor"
                            icon={faLinkedinIn}
                          />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
