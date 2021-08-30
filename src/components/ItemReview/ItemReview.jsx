import React from "react";
import PropTypes from "prop-types";

export const ItemReview = ({ author, content }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

ItemReview.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
