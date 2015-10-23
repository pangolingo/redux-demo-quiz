import React from 'react';
import classNames from 'classnames';

class Answer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var klass = classNames(
      'answer',
      {
        'answer--correct': this.props.a.correct && this.props.isRevealed,
        'answer--incorrect': !this.props.a.correct && this.props.isRevealed
      }
    );
    return <span onClick={this.props.onClick} className={klass}>{this.props.a.text}</span>
  }
}

Answer.defaultProps = {
  // isCorrect: false
};

Answer.propTypes = {
  // text: React.PropTypes.string.isRequired,
  // isCorrect: React.PropTypes.bool
}

export default Answer;