import { Component } from "react";
import "./assets/scss/app.scss";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return this.props.children;
  }
}

export default App;
