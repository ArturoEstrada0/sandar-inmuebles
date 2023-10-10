import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Feedback from "./components/Dashboard/Feedback/Feedback";
import Home from "./pages/Home";

import "./App.css";
import PropertyDetails from "./components/PropertyDetails";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/property/:id" component={PropertyDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
