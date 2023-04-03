import React from "react";
import { Data } from "../data";
import { useParams, Link } from "react-router-dom";

const PostDisplay = () => {
  const { id } = useParams();
  return (
    <>
      <div className="flex post">
        <div className="left">
          <h1>{Data[id - 1].title}</h1>
          <p>
            {Data[id - 1].year} <span>| </span>
            {Data[id - 1].genres.toString()} <span>| </span>
            {Data[id - 1].imdbRating}
          </p>
          <p>{Data[id - 1].storyline}</p>
          <p>
            <span>Starring:</span> {Data[id - 1].actors.toString()}
          </p>
          <Link to={"/posts/list"}>
            <button className="btn">Go back</button>
          </Link>
        </div>
        <div className="right">
          <img src={Data[id - 1].posterurl} alt="thumbnail" />
        </div>
      </div>
    </>
  );
};

export default PostDisplay;
