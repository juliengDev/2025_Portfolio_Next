'use client'
import React, { useState, useEffect, useRef } from "react";
import { useScrollPosition } from "../../src/hooks/useScrollPosition";
import useResizeObserver from "../../src/hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../../src/content/config";
import { NavLink } from "../components/home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions || !ref.current) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  useEffect(() => {
    if (!navbarDimensions || !ref.current) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.NEXT_PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.NEXT_PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {repos.show && (

            <NavLink
              href={process.env.NEXT_PUBLIC_URL + "/#projects"}
            >
              Projects
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.NEXT_PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.NEXT_PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
