import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularMovies from "./Components/PopularMovies";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={PopularMovies}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
