import React, { Component } from "react";
import HeroHome from "./HeroHome";
import HomeCards from "./HomeCards";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <HeroHome />
        <HomeCards />
      </>
    );
  }
}
