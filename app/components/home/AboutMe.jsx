'use client'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image'
import { Jumbotron } from "./migration";



const AboutMe = ({ heading, message, link, imgSize, resume }) => {

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">          
            <Image
              style={{
                width: `${imgSize}px`, 
                height: `${imgSize}px`, 
                objectFit: "cover", 
                borderRadius: "50%", 
              }}  
              className="border border-secondary rounded-circle img-fluid"
              src={link}
              alt="profilepicture"
              width={375}
              height={375}              
            />
          
        </div>
        <div className="col-lg-7">
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead mb-5">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
              href="mailto:julien.gilbert.pro@gmail.com"
              target=" _blank"
              className=" d-inline-flex align-items-center custom-cta-btn btn btn-lg btn-outline-secondary text-white mx-2"
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-2 "/> Contact Me
            </a>
              <a
                className="btn btn-outline-secondary btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
