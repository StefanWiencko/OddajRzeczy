import "./scss/_main.scss";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import CreateAcc from "../src/components/CreateAcc/CreateAcc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={HomePage} />
          <Route path="/login" render={LoginPage} />
          <Route path="/createAcc" render={CreateAcc} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
