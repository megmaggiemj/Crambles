import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Components/Home/Home";
import GameStart from "./Components/GameStart/GameStart";
import Level1 from "./Components/Level1/Level1";
import Level2 from "./Components/Level2/Level2";
import Level3 from "./Components/Level3/Level3";
import GameFinish from "./Components/GameFinish/GameFinish";

import Testing from "./Components/ParallaxTest/ParallaxTest";
// import GradientTest from "./Components/GradientTest/GradientTest";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Intro" element={<GameStart />} />
          <Route path="/Level1" element={<Level1 />} />
          <Route path="/Level2" element={<Level2 />} />
          <Route path="/Level3" element={<Level3 />} />
          <Route path="/GameOver" element={<GameFinish />} />

          <Route path="/Testing" element={<Testing />} />
          {/* <Route path="/GradientTest" element={<GradientTest />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
