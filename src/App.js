import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularMovies from './Components/PopularMovies';
function App() {
  return (
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/" component={PopularMovies}></Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
