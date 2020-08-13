import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    console.log("CDM running");
    axios.get("https://api.github.com/users/Anthony-Brat").then((res) => {
      this.setState({ user: res.data.message });
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>react user github</h1>
      </div>
    );
  }
}

export default App;
