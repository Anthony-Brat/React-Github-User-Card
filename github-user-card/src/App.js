import React from "react";
import axios from "axios";
import UserData from "./components/UserData";
import FollowerData from "./components/FollowerData"
import "./App.css";

class App extends React.Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      user: [],
      followers: []
    }
  }
  getUserData =() => {
    axios
    .get("https://api.github.com/users/Anthony-Brat")
    .then((res) => {
      console.log(res.data)
      this.setState({...this.state.data, user: res.data})
      
    })
    .catch(err => {
      console.log("WE HAVE A PROBLEM", err)
  })
  }
  getFollowersData =() => {
    axios
    .get("https://api.github.com/users/Anthony-Brat/followers")
    .then((res) => {
      console.log(res.data)
      this.setState({...this.state.data, followers: res.data})
      
    })
    .catch(err => {
      console.log("WE HAVE A PROBLEM", err)
  })
  }
  componentDidMount(){
    console.log("CDM Running")
    this.getUserData()
    this.getFollowersData()
  }
  render() {
    console.log("Render");
    return (
      <div className="App">
<h1>Tony and his Github follower</h1>
<UserData userProps={this.state.user}/>
<FollowerData followersProps={this.state.followers}/>
      </div>
    )
  }
}

  export default App;