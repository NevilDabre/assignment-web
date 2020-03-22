import React from "react";
import "./post.css";

const Post = ({ children }) => {
  return (
    <div className="card">
      <div className="thumbnail">
        <img
          src="https://signage.uiowa.edu/sites/signage.uiowa.edu/files/slides/biology_slide2.jpg"
          alt="biology"
          class="left"
        />
      </div>
      <div className="body">{children}</div>
    </div>
  );
};

export default Post;
