import React, {Component} from 'react';
import './createAnimalRegister.scss'


export default class createAnimalRegister extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-create-animal-register">Hello! component createAnimalRegister</div>;
    }
  }
// export default connect(
//     ({ createAnimalRegister }) => ({ ...createAnimalRegister }),
//     dispatch => bindActionCreators({ ...createAnimalRegisterActions }, dispatch)
//   )( createAnimalRegister );