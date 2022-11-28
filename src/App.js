import React from "react";
import "../src/App.css"
import Nav from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Add from "./components/func/Add";
import Edit from "./components/func/Edit";
import View from "./components/func/View";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/func/add' element={<Add />}></Route>
          <Route exact path='/func/edit/:id' element={<Edit />}></Route>
          <Route exact path='/func/view/:id' element={<View />}></Route>
        </Routes>

      </Router>


    </div>
  );
}

export default App;
