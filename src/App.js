import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, Bubble, Nav } from "./components";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/bubbles" component={Bubble} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
