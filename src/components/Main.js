require('normalize.css');
require('styles/App.css');

import React from 'react';
import Quiz from './Quiz'

class AppComponent extends React.Component {
  questions() {
    return [
  {
    text: 'Who took the cookie from the cookie jar?',
    answers: [
      {
        id: 1,
        text: 'Who me?',
        correct: true
      },
      {
        id: 2,
        text: 'Test question 2',
        correct: false
      },
      {
        id: 3,
        text: 'Test question 3',
        correct: false
      },
      {
        id: 4,
        text: 'Test question 4',
        correct: false
      }
    ]
  },
  {
    text: 'How many licks does it take to get to the center of a Tootsie Pop?',
    answers: [
      {
        id: 1,
        text: '10',
        correct: false
      },
      {
        id: 2,
        text: '100',
        correct: false
      },
      {
        id: 3,
        text: '1,000',
        correct: true
      },
      {
        id: 4,
        text: '100,000,000',
        correct: false
      }
    ]
  }
]
  }

  render() {
    return (
      <Quiz title="My Lovely Quiz" questions={this.questions()} />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
