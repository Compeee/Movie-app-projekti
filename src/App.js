import { BrowserRouter, Route, Switch } from "react-router-dom";
import Popular from "./Components/Popular";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Results from "./Components/Results";
import React from "react";
import "./index.css";
import AllShows from "./Components/AllShows";
import AllMovies from "./Components/AllMovies";
import Upcoming from "./Components/Upcoming";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="parent">
        <div className="content">
          <Switch>
            <Route path="/shows" component={AllShows}></Route>
            <Route path="/movies" component={AllMovies}></Route>
            <Route path="/upcoming" component={Upcoming}></Route>
            <Route path="/popular" component={Popular}></Route>
            <Route path="/search/:query" component={Results}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
