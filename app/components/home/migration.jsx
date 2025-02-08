'use client'
import React from 'react';
import Nav from "react-bootstrap/Nav";

export const Jumbotron = React.forwardRef((props, ref) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };

  return (
    <div
      id={props.id}
      className={`py-3 ${props.className}`}
      style={bgStyle}
      ref={ref} // Attache la ref ici
    >
      <div className="container py-3">{props.children}</div>
    </div>
  );
});

export const NavLink = (props) => {
  return (
    <Nav.Link
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      <span className={`nav-item lead ${props.className}`}>
        {props.children}
      </span>
    </Nav.Link>
  );
}
