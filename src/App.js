import {BrowserRouter, Route, Switch} from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
