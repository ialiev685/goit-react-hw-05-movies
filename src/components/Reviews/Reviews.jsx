import React, { useState, useEffect } from "react";
import { fetchReviews } from "../../services";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const { movieId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchReviews(movieId).then((response) => setContent(response.results));
  }, []);
  console.log(content);
  return (
    <div>
      {
        <ul>
          {content &&
            content.map(({ author, content, id }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
        </ul>
      }
    </div>
  );
};
