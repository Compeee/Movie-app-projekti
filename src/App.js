import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Navbar/Navbar";
import React from "react";
import AllShows from "./Components/AllShows"
import AllMovies from "./Components/AllMovies"
import Upcoming from "./Components/Upcoming";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/shows" component={AllShows}></Route>
            <Route path="/movies" component={AllMovies}></Route>
            <Route path="/upcming" component={Upcoming}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
