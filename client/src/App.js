import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:slug" component={Product} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
