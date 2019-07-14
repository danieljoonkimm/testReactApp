import React, {Component} from "react";
import List from "./List/index.jsx";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <List/>
      </div>
    )
  }
};

export default App;