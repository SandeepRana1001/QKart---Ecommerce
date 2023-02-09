import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import ipConfig from "./ipConfig.json";
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Thanks from './components/Thanks'

import Checkout from './components/Checkout'

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (

    <div className="App">
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/thanks">
          <Thanks />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
