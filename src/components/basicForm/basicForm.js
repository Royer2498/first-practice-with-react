import React, {Component} from 'react';
import './basicForm.scss'
import '../../css/common-blocks/basic-form-card/basic-form-card.css';
import '../../css/common-blocks/basic-form-card/basic-form__title.css';
import '../../css/common-blocks/input/input.css'; 
import '../../css/common-blocks/basic-form-card/basic-form__category-input.css';
import '../../css/common-blocks/basic-form-card/basic-form__category-label.css';
import '../../css/common-blocks/basic-form-card/basic-form__colour-input.css';
import '../../css/common-blocks/basic-form-card/basic-form__colour-label.css';
import '../../css/common-blocks/basic-form-card/basic-form__form.css';
import '../../css/common-blocks/basic-form-card/basic-form__horn-input.css';
import '../../css/common-blocks/basic-form-card/basic-form__horn-label.css';
import '../../css/common-blocks/basic-form-card/basic-form__name-input.css';
import '../../css/common-blocks/basic-form-card/basic-form__name-label.css';
import '../../css/common-blocks/basic-form-card/basic-form__race-input.css';
import '../../css/common-blocks/basic-form-card/basic-form__race-label.css';
import '../../css/common-blocks/basic-form-card/basic-form__typing-input.css';
import '../../css/common-blocks/basic-form-card/basic-form__typing-label.css';
import '../../css/common-blocks/basic-form-card/basic-form__save-button.css';


export default class BasicForm extends Component {
    render() {
      return (
        <div className="basic-form">
          <div className="card basic-form-card">
              <div className="basic-form__title">
                  GENERALIDADES
              </div>
              <div className="basic-form__form">
                <label className="basic-form__name-label">Nombre</label>
                <input className="input basic-form__name-input"/>  
                <label className="basic-form__race-label">Raza</label>  
                <input className="input basic-form__race-input"/>
                <label className="basic-form__horn-label">Cuernos</label>  
                <input className="input basic-form__horn-input"/>
                <label className="basic-form__colour-label">Color</label>  
                <input className="input basic-form__colour-input"/>
                <label className="basic-form__category-label">Categoría</label>  
                <input className="input basic-form__category-input"/>
                <label className="basic-form__typing-label">Tipificación</label> 
                <input className="input basic-form__typing-input"/>
              </div>
              <div className="login-card__button-container">
                <button className="button basic-form__save-button">GUARDAR</button>
            </div> 
          </div>
        </div>
      ); 
    }
  1}
