import React, { useState } from "react";
import "./styles.css";
import Lesson from "./components/Lesson/Lesson";
import Post from "./components/Post/Post";
import SpeechControl from "./components/SpeechControl/SpeechControl";
import TextSizeControl from "./components/TextSizeControl/TextSizeControl";
import styled from "styled-components";
import LandingPage from "./components/LandingPage/LandingPage";

const ControlHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function App() {
  const [textSize, setTextSize] = useState(0);

  const handleTextSizeChanged = type => {
    switch (type) {
      case "increase":
        setTextSize(textSize + 0.2);
        break;
      case "decrease":
        setTextSize(textSize - 0.2);
        break;
      default:
        null;
    }
  };
  return (
    <div className="App">
      {/* <Post>
        <ControlHolder>
          <SpeechControl />
          <TextSizeControl handleTextSizeChanged={handleTextSizeChanged} />
        </ControlHolder>
        <Lesson textSize={textSize} />
      </Post> */}
      <LandingPage />
    </div>
  );
}
