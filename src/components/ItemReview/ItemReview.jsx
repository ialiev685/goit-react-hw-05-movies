import React from "react";

export const ItemReview = ({ author, content }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};
