import React from 'react';
import './App.css';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="page-content">
      <div className="navbar-position">
        <Navbar/>
      </div>
      <div className="login-position">
        <Login/>
      </div>
      <div className="footer-position">
        <Footer/>
      </div>
    </div>
  );
}
export default App;
