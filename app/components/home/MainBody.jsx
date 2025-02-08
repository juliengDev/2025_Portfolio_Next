'use client'
import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faFreeCodeCamp 
} from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const iconMapping = {
  faGithub: faGithub,
  faLaptopCode: faLaptopCode,
  faFreeCodeCamp: faFreeCodeCamp,
  faLinkedin: faLinkedin
};

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons,jobTitle }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
          overflow:"hidden"
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars" ></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <h2 className="mb-5">{jobTitle}</h2>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
              <FontAwesomeIcon icon={iconMapping[icon.image]} className="fa-3x socialicons"/>
              
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
