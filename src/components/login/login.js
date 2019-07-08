import React, {Component} from 'react';
import './login.scss';
import '../../css/common-blocks/button/button.css';
import '../../css/common-blocks/input/input.css';
import '../../css/common-blocks/login-card/login-card.css';
import '../../css/common-blocks/login-card/login-card__button-container.css';
import '../../css/common-blocks/login-card/login-card__form.css';
import '../../css/common-blocks/login-card/login-card__login-button.css';
import '../../css/common-blocks/login-card/login-card__password-input.css';
import '../../css/common-blocks/login-card/login-card__password-label.css';
import '../../css/common-blocks/login-card/login-card__register-button.css';
import '../../css/common-blocks/login-card/login-card__title.css';
import '../../css/common-blocks/login-card/login-card__username-input.css';
import '../../css/common-blocks/login-card/login-card__username-label.css';
import '../../css/common-blocks/card/card.css'

export default class Login extends Component {
    render() {
      return (
      <div className="login">
          <div className="card login-card">
            <div className="login-card__title">
                INGRESAR
            </div>
            <div className="login-card__form">
              <label className="login-card__username-label">Nombre de usuario</label>
              <input className="input login-card__username-input"/>  
              <label className="login-card__password-label">Contraseña</label>  
              <input className="input login-card__password-input"/>
            </div> 
            <div className="login-card__button-container">
              <button className="button login-card__login-button">INGRESAR</button>
              <button className="button login-card__register-button">REGISTRARSE</button>
            </div>
          </div>
      </div>
      ); 
    }
}