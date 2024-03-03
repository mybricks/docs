import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Section = ({ title, data }) => {
  return (
    <div className="section">
      <div className="title">{title}</div>
      <div className="content">
        {data.map((item, index) => (
          <Link to={item.route} className="card" key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            {/* <p>{item.description}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section;
