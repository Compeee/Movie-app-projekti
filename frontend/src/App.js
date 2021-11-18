import { BrowserRouter, Route, Switch } from "react-router-dom";
import Popular from "./Components/Popular";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Results from "./Components/Results";
import React from "react";
import "./index.css";
import Upcoming from "./Components/Upcoming";
import { GlobalProvider } from "./context/GlobalState";
import Watchlist from "./Components/Watchlist";
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
              <Route path="/watchlist" component={Watchlist}></Route>
              <Route path="/search/:query" component={Results}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
