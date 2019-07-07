import React, {Component} from 'react';
import './login.scss'

export default class Login extends Component {
    render() {
      return (
      <div className="login">
          <div className="login__card">
            <div className="login__title">
                INGRESAR
            </div>
            <div className="login__form">
              <label className="login__username-label">Nombre de usuario</label>
              <input className="input login__username-input"/>  
              <label className="login__password-label">Contraseña</label>  
              <input className="input login__password-input"/>
            </div> 
            <div className="login__button-container">
              <button className="button login__in-button">INGRESAR</button>
              <button className="button login__register-button">REGISTRARSE</button>
            </div>
          </div>
      </div>
      ); 
    }
}