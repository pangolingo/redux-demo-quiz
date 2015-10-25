import React from 'react';
import ClassNames from 'classnames';

class Answer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // for accessibility, accept space and enter in place of click
  handleKeypress(e){
    // 13 = ENTER
    // 32 = SPACE
    if(e.keyCode == 13 || e.keyCode == 32){
      this.props.onClick(e);
    }
  }

  render() {
    let classNames = ClassNames({
      'answer': true,
      'answer--correct': this.props.a.correct && this.props.isRevealed,
      'answer--incorrect': !this.props.a.correct && this.props.isRevealed,
      'answer--selected': this.props.isSelected
    });
    return <span onClick={this.props.onClick} tabIndex='0' role="button" onKeyDown={this.handleKeypress.bind(this)} className={classNames}>{this.props.a.text}</span>
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