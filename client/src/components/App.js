import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Mainpage from "./pages/Mainpage.js";
import Nineteen from "./pages/Nineteen.js";
import Crime from "./pages/Crime.js";
import Ulysses from "./pages/Ulysses.js";
import Godot from "./Plays.js/Godot.js";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }
  render() {
    return (
      <>
        <Router>
          <Nineteen path= "/1984"/>
          <Crime path="/Crime"/>
          <Ulysses path="/Ulysses"/>
          <Godot path="/Godot"/>
          <Mainpage path= "/"/>
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
