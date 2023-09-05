import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import News from "./News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  let pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWSAPI;

  const ToggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f243a";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} ToggleSwitch={ToggleSwitch} />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                mode={mode}
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                mode={mode}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                mode={mode}
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                mode={mode}
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                mode={mode}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                mode={mode}
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
