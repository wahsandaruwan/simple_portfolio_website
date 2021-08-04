import {BrowserRouter, Route, Switch} from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NavMenu from "./components/NavMenu";

const App = () => {
  return (
    <BrowserRouter>
      <NavMenu/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
        <Route path="/skills">
          <Skills/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
