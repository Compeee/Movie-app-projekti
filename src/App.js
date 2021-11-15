import { BrowserRouter, Route, Switch } from "react-router-dom";
import Popular from "./Components/Popular";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Results from "./Components/Results";
import React from "react";
import "./index.css";
import Upcoming from "./Components/Upcoming";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <div className="parent">
          <div className="content">
            <Switch>
              <Route path="/upcoming" component={Upcoming}></Route>
              <Route path="/popular" component={Popular}></Route>
              <Route path="/search/:query" component={Results}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
