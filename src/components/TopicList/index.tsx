import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";

const Section = ({ title, data }) => {
  const Part = useCallback(({ item }) => {
    return (
      <div className={css.part}>
        <div className={css.label}>{item.title}</div>
        <div className={css.list}>
          {item.children.map((child, index) => {
            return (
              <Link to={child.route} className={css.link} key={index}>
                <div>{child.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }, []);

  return (
    <div className={css.section}>
      <div className={css.title}>{title}</div>
      {data.map((item, index) => {
        return <Part item={item}></Part>;
      })}
    </div>
  );
};

export default Section;
