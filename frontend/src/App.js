import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Results from "./Components/Results";
import React from "react";
import "./index.css";
import Upcoming from "./Components/Upcoming";
import { GlobalProvider } from "./context/GlobalState";
import Watchlist from "./Components/Watchlist";
import Movies from "./Components/Movies";
import Shows from "./Components/Shows";
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <div className="parent">
            <div className="content">
              <Switch>
                <Route path="/upcoming" component={Upcoming}></Route>
                <Route path="/movies" component={Movies}></Route>
                <Route path="/shows" component={Shows}></Route>
                <Route path="/watchlist" component={Watchlist}></Route>
                <Route path="/search/:query" component={Results}></Route>
                <Route path="/" component={Home}></Route>
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
