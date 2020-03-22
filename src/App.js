import React from "react";
import "./styles.css";
import Lesson from "./components/Lesson/Lesson";
import Post from "./components/Post/Post";

export default function App() {
  return (
    <div className="App">
      <Post>
        <Lesson />
      </Post>
    </div>
  );
}
