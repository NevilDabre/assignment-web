import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import LearningPageLayout from "./components/LearningPage/LearningPageLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/contact" />
          <Route path="/learningpage">
            <LearningPageLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
