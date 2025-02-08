'use client'
import React from 'react';
import Image from 'next/image'
import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4" md="6" sm="12" className="mb-4">
     <div className="d-flex flex-column align-items-center justify-content-between text-center">
        <Image width={200} height={100} className="img-fluid w-25 pb-4" src={data.companylogo} alt="Company Logo"/>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;