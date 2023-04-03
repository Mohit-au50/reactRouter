import React from "react";
import { Data } from "../data";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      {Data.map((item) => {
        return (
          <div
            key={item.id}
            className="posts"
            onClick={() => {
              navigate(`/posts/${item.id}`);
            }}
          >
            <img src={item.posterurl} alt="thumbnail" />
            <h3>{item.title}</h3>
            <p>{item.releaseDate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
