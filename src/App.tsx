import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Body, ChapterContent, Header, TaskDescription } from "./components";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index />
            <Route path="intro" element={<TaskDescription />} />
            <Route path="chapters">
              <Route path=":chapterId" element={<ChapterContent />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
