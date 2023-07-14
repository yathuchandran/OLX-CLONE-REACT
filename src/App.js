import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path='/'></Route>
            
          <Route Component={Signup} path='/signup'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
