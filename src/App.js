import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import "./App.css";
import PropertyDetails from "./components/PropertyDetails";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
            <Route path="/property/:id" component={PropertyDetails} />
            <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
