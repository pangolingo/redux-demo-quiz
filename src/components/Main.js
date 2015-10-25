import React from 'react';
import Quiz from './Quiz'

require('normalize.css');
require('styles/App.scss');

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Quiz id={99} />
    );
  }
}

App.defaultProps = {};

export default App;