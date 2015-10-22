import React from 'react';

class Answer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <span>{this.props.text}</span>
  }
}

Answer.defaultProps = {
  correct: false
};

Answer.propTypes = {
  text: React.PropTypes.string.isRequired,
  correct: React.PropTypes.bool
}

export default Answer;