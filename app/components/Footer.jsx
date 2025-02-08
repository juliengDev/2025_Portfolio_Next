'use client'
import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/juliengDev"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Julien Gilbert
          </span>
        </a>{" "}
        using <FontAwesomeIcon icon={faReact} />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
