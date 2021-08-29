import React, { useState, useEffect } from "react";
import { fetchReviews } from "../../services";
import { useParams } from "react-router-dom";
import { ItemReview } from "../ItemReview";

export const Reviews = () => {
  const { movieId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchReviews(movieId).then((response) => setContent(response.results));
  }, [movieId]);

  return (
    <div>
      {
        <ul>
          {content.length ? (
            content.map(({ author, content, id }) => (
              <ItemReview key={id} author={author} content={content} id={id} />
            ))
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      }
    </div>
  );
};
