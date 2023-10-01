import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Analytics from './components/Dashboard/Analitics/Analitycs';
import Properties from './components/Dashboard/Properties/Properties';
import AddProperty from './components/Dashboard/Properties/AddProperty';
import EditProperty from './components/Dashboard/Properties/EditProperty';
import DeleteProperty from './components/Dashboard/Properties/DeleteProperty';
import HideProperty from './components/Dashboard/Properties/HideProperty';
import Settings from './components/Dashboard/Settings/Settings';
import UserGuide from './components/Dashboard/UseGuide/UseGuide';
import Feedback from './components/Dashboard/Feedback/Feedback';
import Footer from './components/Footer';
import './App.css'

  function App() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <Router>
    <div className={`app ${isOpen ? 'open' : ''}`}>
      <Header toggleSidebar={toggleSidebar} />
      <main className="main-content">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/properties" exact component={Properties} />
          <Route path="/properties/add" component={AddProperty} />
          <Route path="/properties/edit/:id" component={EditProperty} />
          <Route path="/properties/delete/:id" component={DeleteProperty} />
          <Route path="/properties/hide/:id" component={HideProperty} />
          <Route path="/settings" component={Settings} />
          <Route path="/user-guide" component={UserGuide} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </main>
    </div>
  </Router>
  );
}

export default App;
