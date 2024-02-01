import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import SignIn from "./Components/SignIn/SignIn";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import "./App.css";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputs: "",
      imageurl: "",
      route: "SignIn",
    };
  }
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ inputs: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageurl: this.state.inputs });
    //https://i.pinimg.com/564x/f5/58/41/f55841f2fceb6004eda774a47c59db3a.jpg
  };
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        {this.state.route === "SignIn" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageurl={this.state.imageurl} />
          </div>
        )}
      </div>
    );
  }
}
export default App;
