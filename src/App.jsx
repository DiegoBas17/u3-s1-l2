import { Component } from "react";
import "./App.css";
import AllTheBooks from "./component/AllTheBooks";
import MyFooter from "./component/MyFooter";
import MyNav from "./component/MyNav";
import Welcome from "./component/Welcome";

class App extends Component {
  render() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}
}

export default App;
