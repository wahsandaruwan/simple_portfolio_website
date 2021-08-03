import {BrowserRouter, Route, Switch} from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/portfolio">
        <Portfolio/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
