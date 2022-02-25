import '../styles/AboutSection.css';
import image from '../assets/images/new-pic.png';
import mypdf from '../assets/files/tanvirahmedCV.pdf';

export default function AboutSection() {
  return (
    <div className="about-container">
      <div className="rightpart-p-about">
        <div className="about-main-container">
          <div className="about-items">
            <div className="about-content">
              <img class="grayscale" src={image} alt="my_picture" />
              <div className="about-text">
                Hello! I'm Tanvir, a passionate software engineer. I develop web
                applications. My core skill is based on JavaScript, PHP and I love to do most of the
                things using JavaScript and PHP. Currently working on ReactJs projects. Planning to have adequate knowledge of back-end and front-end for developing top-notch website.
              </div>
              <div className="about-cv">
                <a href={mypdf} download="CV.pdf" className="cv-button">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
