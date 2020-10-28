import "./scss/_main.scss";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={HomePage} />
          <Route path="/login" render={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
