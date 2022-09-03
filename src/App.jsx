import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

// components
import MainHeader from "./components/MainHeader";
import HomePage from "./components/Home/HomePage";

export default class App extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </>
    );
  }
}