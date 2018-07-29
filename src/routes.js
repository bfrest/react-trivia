import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import App from "./App";
import Page2 from "./components/Page2/Page2.js";

export default (
  <Switch>
    <Route path="/" component={App} />
    <Route path="/page2" component={Page2} />
  </Switch>
);
