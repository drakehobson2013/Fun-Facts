import {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.component"
import FactOne from "./components/FactOne.component"
import FactTwo from "./components/FactTwo.component"
import FactThree from "./components/FactThree.component"
import Home from "./components/Home.component"

class App extends Component {
  render(){
  return (
<Router>
<div className="app">
  <Navbar />
  <br/>
  <Switch>
  <Route exact path="/"  component={Home} />
  <Route path="/factOne" component={FactOne} />
  <Route path="/factTwo" component={FactTwo} />
  <Route path="/factThree" component={FactThree} />
  </Switch>
</div>
</Router>
  );
}
}

export default App;
