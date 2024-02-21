import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/blog/10.jpg"


const title = "Most Popular Post";
const postList = [
  {
    id: 1,
    imgUrl: image1,
    imgAlt: "popPost",
    title: "Excellent Customer Service",
    date: "Jan 14,2024",
  },
  {
    id: 2,
    imgUrl: image1,
    imgAlt: "popPost",
    title: "Excellent Customer Service",
    date: "Jan 14,2024",
  },
  {
    id: 3,
    imgUrl: image1,
    imgAlt: "popPost",
    title: "Excellent Customer Service",
    date: "Jan 14,2024",
  },
  {
    id: 4,
    imgUrl: image1,
    imgAlt: "rajibraj91",
    title: "Excellent Customer Service",
    date: "Jan 14,2024",
  },
];

const MostPopularPost = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {postList.map((blog, i) => (
          <li className="d-flex flex-wrap justify-content-between" key={i}>
            <div className="post-thumb">
              <Link to={`/blog/${blog.id}`}>
                <img src={`${blog.imgUrl}`} alt={`${blog.imgAlt}`} />
              </Link>
            </div>
            <div className="post-content">
              <Link to={`/blog/${blog.id}`}>
                <h6>{blog.title}</h6>
              </Link>
              <p>{blog.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopularPost;
