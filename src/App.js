import React, { useState } from "react";
import "./styles.css";
import LandingPage from "./components/LandingPage/LandingPage";
import LearningPage from "./components/LearningPage/LearningPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/contact" />
          <Route path="/learningpage">
            <LearningPage
              textSize={textSize}
              handleTextSizeChanged={handleTextSizeChanged}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
