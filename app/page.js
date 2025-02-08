'use client'
import React, { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';
import MainBody from '@/components/home/MainBody'
import AboutMe from '@/components/home/AboutMe'
import Skills from '@/components/home/Skills'
import RecentProject from '@/components/home/RecentProject'
import Experience from '@/components/home/Experience'
import AllProject from "./components/home/AllProject.jsx"
import Leadership from '@/components/home/Leadership'
import GetInTouch from '@/components/home/GetInTouch'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
// / import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";

import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
  data
} from "../src/content/config.js";


export default function Home() {
  
  useEffect(() => {
    const TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
    

    if (!TRACKING_ID) {
      console.error('Google Analytics Tracking ID is not defined in .env.local');
      return; 
    }

    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;
      if (!pathname.endsWith("/")) {
        window.location.replace(`${pathname}/`);
      }
    }
  }, []);

  const mainBodyRef = useRef();
  const titleRef = React.useRef();

  return (
    <>
    {navBar.show && <NavBar ref={titleRef} />}
      <MainBody
      gradient={mainBody.gradientColors}
      title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
      message={mainBody.message}
      icons={mainBody.icons}
      ref={mainBodyRef}
      jobTitle={mainBody.title}
    />
    {about.show && (
      <AboutMe
        heading={about.heading}
        message={about.message}
        link={about.imageLink}
        imgSize={about.imageSize}
        resume={about.resume}
      />
    )}
    
    {repos.show && (
      <RecentProject
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specfic={repos.specificRepos}
      />
    )}
    {data.show && (
      <AllProject  
      heading={data.heading} 
      projects={data.projects}  
      />
    )       
    }
    {
      experiences.show && (
        <Experience experiences={experiences}/>
      )
    }
    {leadership.show && (
      <Leadership
        heading={leadership.heading}
        message={leadership.message}
        img={leadership.images}
        imageSize={leadership.imageSize}
      />
    )}
    {skills.show && (
      <Skills
        heading={skills.heading}
        hardSkills={skills.hardSkills}
        softSkills={skills.softSkills}
      />
    )}
    <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
  </>
  )
}