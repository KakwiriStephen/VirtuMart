import { Link } from "react-router-dom";
import image1 from "../../assets/images/blog/10.jpg";
import image2 from "../../assets/images/blog/11.jpg";
import image3 from "../../assets/images/blog/12.jpg";
import image4 from "../../assets/images/blog/09.jpg";

const title = "Most Popular Post";

const postList = [
  {
    id: 1,
    imgUrl: image1,
    imgAlt: "popPost",
    title: "Best Customer Service Ever",
    date: "Jan 05,2024",
  },
  {
    id: 2,
    imgUrl: image2,
    imgAlt: "popPost",
    title: "Best Customer Service Ever",
    date: "Jan 05,2024",
  },
  {
    id: 3,
    imgUrl: image3,
    imgAlt: "popPost",
    title: "Best Customer Service Ever",
    date: "Jan 05,2024",
  },
  {
    id: 4,
    imgUrl: image4,
    imgAlt: "popPost",
    title: "Best Customer Service Ever",
    date: "Jan 05,2024",
  },
];

const PopularPost = () => {
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

export default PopularPost;
