import React from 'react';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import BasicForm from './components/basicForm/basicForm';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';


function App() {
  return (
    <div className="page-content">
      <div className="navbar-position">
        <Navbar/>
      </div>
      <div className="login-position">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/basic-form" component={BasicForm} />
          </Switch>
        </Router>
      </div>
      <div className="footer-position">
        <Footer/>
      </div>
    </div>
  );
}
export default App;
