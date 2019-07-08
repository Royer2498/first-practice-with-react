import React from 'react';
import './App.css';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import BasicForm from './components/basicForm/basicForm';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page-content">
      <div className="navbar-position">
        <Navbar/>
      </div>
      <div className="login-position">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/basic-form" component={BasicForm} />
        </Switch>
      </div>
      <div className="footer-position">
        <Footer/>
      </div>
    </div>
  );
}
export default App;
