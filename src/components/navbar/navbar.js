import React, {Component} from 'react';
import './navbar.scss';
import '../../css/common-blocks/links-bar/links-bar.css'
import '../../css/common-blocks/links-bar/links-bar__item.css'
import '../../css/common-blocks/links-bar/links-bar__link.css'
import '../../css/common-blocks/links-bar/links-bar__list.css'
import '../../css/common-blocks/logo/logo.css'
import { Link } from "react-router-dom";

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
                  <Link className="links-bar__link" to="/users">INICIO</Link>
                </li>
                <li className="links-bar__item">
                  <Link className="links-bar__link" to="/basic-form">SOBRE NOSOTROS </Link>
                </li>
                <li className="links-bar__item">
                  <Link className="links-bar__link" to="/users">CONTACTANOS</Link>
                </li>
                <li className="links-bar__item">
                  <Link className="links-bar__link" to="/">REGISTRATE</Link>
                </li>
              </ul>
          </div>
        </div>
      );
    }
}
