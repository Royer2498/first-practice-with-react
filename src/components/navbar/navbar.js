import React, {Component} from 'react';
import './navbar.scss';

export default class Navbar extends Component {
    render() {
      return (
        <div className="navbar">
          <div className="logo">
              ADMINISTRACION GANADERA
          </div>
          <div className="links-bar">
              <ul className="links-bar__list">
                <li className="links-bar__item">
                  <a className="links-bar__link" href="">INICIO</a>
                </li>
                <li className="links-bar__item">
                  <a className="links-bar__link" href=""> SOBRE NOSOTROS </a>
                </li>
                <li className="links-bar__item">
                  <a className="links-bar__link" href="">CONTACTANOS</a>
                </li>
                <li className="links-bar__item">
                  <a className="links-bar__link" href="">REGISTRATE</a>
                </li>
              </ul>
          </div>
        </div>
      );
    }
}
