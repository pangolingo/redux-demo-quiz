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
      'fake-checkbox': true,
      'btn--unstyled': true,
      'answer': true,
      'answer--correct': this.props.a.correct && this.props.isRevealed,
      'answer--incorrect': !this.props.a.correct && this.props.isRevealed,
      'answer--selected': this.props.isSelected
    });
    return <button className={classNames} onClick={this.props.onClick} disabled={this.props.isRevealed}>{this.props.a.text}</button>
  }
}

Answer.defaultProps = {};

Answer.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  isRevealed: React.PropTypes.bool,
  isSelected: React.PropTypes.bool
}

export default Answer;