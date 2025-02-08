import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../../src/content/blog";
import Link from 'next/link'
// import Image from 'next/image'
const Blog = (props) => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Blogs</h1>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            index={index}
          />
        );
      })}
    </div>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {/* <Image src={image} className="card-img" alt="..." /> */}
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
              <Link to={`${process.env.NEXT_PUBLIC_URL}blog/${index}`}>
                Read more...{" "}
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Blog, BlogBuilder };
