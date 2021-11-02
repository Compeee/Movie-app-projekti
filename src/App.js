import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
