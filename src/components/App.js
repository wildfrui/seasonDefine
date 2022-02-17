import React from "react";
import Season from "./Season";

class App extends React.Component {
  state = { latitude: "", month: "", errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.setState({
          latitude: coords.latitude,
        });
      },
      (error) => {
        console.log(error.message);
        this.setState({ errorMessage: error.message });
      }
    );
    const currentDate = new Date();
    this.setState({ month: currentDate.getMonth() });
  }

  conditionState() {
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <Season
          latitude={this.state.latitude}
          month={this.state.month}
        ></Season>
      );
    } else if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>;
    } else {
      return <div>wait</div>;
    }
  }

  render() {
    return <div>{this.conditionState()}</div>;
  }
}

export default App;
