import React from "react";
import moment from "moment";
const Article = ({ title, length, snippet }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <p className="post-info">
        <span>{moment().format("dddd Do, YYYY")} </span>
        <span>{length} min read</span>
      </p>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
