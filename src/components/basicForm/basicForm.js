import React, { Component } from "react";
import "./basicForm.scss";
import "../../css/common-blocks/basic-form-card/basic-form-card.css";
import "../../css/common-blocks/basic-form-card/basic-form__title.css";
import "../../css/common-blocks/input/input.css";
import "../../css/common-blocks/basic-form-card/basic-form__category-input.css";
import "../../css/common-blocks/basic-form-card/basic-form__category-label.css";
import "../../css/common-blocks/basic-form-card/basic-form__colour-input.css";
import "../../css/common-blocks/basic-form-card/basic-form__colour-label.css";
import "../../css/common-blocks/basic-form-card/basic-form__form.css";
import "../../css/common-blocks/basic-form-card/basic-form__horn-input.css";
import "../../css/common-blocks/basic-form-card/basic-form__horn-label.css";
import "../../css/common-blocks/basic-form-card/basic-form__name-input.css";
import "../../css/common-blocks/basic-form-card/basic-form__name-label.css";
import "../../css/common-blocks/basic-form-card/basic-form__race-input.css";
import "../../css/common-blocks/basic-form-card/basic-form__race-label.css";
import "../../css/common-blocks/basic-form-card/basic-form__typing-input.css";
import "../../css/common-blocks/basic-form-card/basic-form__typing-label.css";
import "../../css/common-blocks/basic-form-card/basic-form__save-button.css";
import "../../css/common-blocks/basic-form-card/basic-form__button-container.css";

export default class BasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      race: "",
      horn: "",
      colour: "",
      category: "",
      typing: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div className="basic-form">
        <div className="card basic-form-card">
          <div className="basic-form__title">GENERALIDADES</div>
          <form className="basic-form__form" onSubmit={this.handleSubmit}>
            <label className="basic-form__name-label">Nombre</label>
            <input
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              className="input basic-form__name-input"
            />
            <label className="basic-form__race-label">Raza</label>
            <input
              name="race"
              onChange={this.handleChange}
              value={this.state.race}
              className="input basic-form__race-input"
            />
            <label className="basic-form__horn-label">Cuernos</label>
            <input
              name="horn"
              onChange={this.handleChange}
              value={this.state.horn}
              className="input basic-form__horn-input"
            />
            <label className="basic-form__colour-label">Color</label>
            <input
              name="colour"
              onChange={this.handleChange}
              value={this.state.colour}
              className="input basic-form__colour-input"
            />
            <label className="basic-form__category-label">Categoría</label>
            <input
              name="category"
              onChange={this.handleChange}
              value={this.state.category}
              className="input basic-form__category-input"
            />
            <label className="basic-form__typing-label">Tipificación</label>
            <input
              name="typing"
              onChange={this.handleChange}
              value={this.state.typing}
              className="input basic-form__typing-input"
            />
            <input
              type="submit"
              value="Guardar"
              className="button basic-form__save-button"
            />
          </form>
        </div>
      </div>
    );
  }
}
