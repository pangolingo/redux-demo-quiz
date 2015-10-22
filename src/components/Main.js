require('normalize.css');
require('styles/App.css');

import React from 'react';
import Quiz from './Quiz'
// import questions from '../data/questions'

class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Quiz title="My Lovely Quiz" />
    );
  }
}

AppComponent.defaultProps = {
};





export default AppComponent;
