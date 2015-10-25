import React from 'react';
import ClassNames from 'classnames';

class Answer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let classNames = ClassNames({
      'answer': true,
      'answer--correct': this.props.a.correct && this.props.isRevealed,
      'answer--incorrect': !this.props.a.correct && this.props.isRevealed,
      'answer--selected': this.props.isSelected
    });
    return <span onClick={this.props.onClick} className={classNames}>{this.props.a.text}</span>
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