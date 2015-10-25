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
      'btn--unstyled': true,
      'answer': true,
      'answer--correct': this.props.a.correct && this.props.isRevealed,
      'answer--incorrect': !this.props.a.correct && this.props.isRevealed,
      'answer--selected': this.props.isSelected
    });
    //return <span onClick={this.props.onClick} tabIndex='0' role="button" onKeyDown={this.handleKeypress.bind(this)} className={classNames}>{this.props.a.text}</span>
    // return <label><input type='radio' name='answer' /> {this.props.a.text}</label>
    return <button className={classNames} onClick={this.props.onClick} disabled={this.props.isRevealed}>{this.props.a.text}</button>
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