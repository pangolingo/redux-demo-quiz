import React from 'react';

class EndScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <div>
      1/10 Question Correct<br />
      You did Awesome!<br />
      You are better than 65% of everyone else who took this quiz.
    </div>
  }
}

EndScreen.defaultProps = {
};

EndScreen.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default EndScreen;