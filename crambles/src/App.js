import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes, Navigate} from "react-router-dom"
import React, { useState } from 'react'
import Home from './Components/Home/Home';
import Level1 from './Components/Level1/Level1';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Level1" element={<Level1 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

