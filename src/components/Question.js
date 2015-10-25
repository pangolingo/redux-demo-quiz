import React from 'react';
import Answer from './Answer';
import ClassNames from 'classnames';

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isAnswered: false,
      selectedAnswer: null
    })
  }

  handleAnswer(answer) {
    if(this.state.isAnswered){
      return;
    }
    this.props.handleAnswer(this.props.q.id, answer.id);
    this.setState({
      isAnswered: true,
      selectedAnswer: answer.id
    })
  }

  render() {
    let answers = this.props.q.answers.map((current) => {
      return <dd key={current.id}>
         <Answer a={current} onClick={this.handleAnswer.bind(this, current)} isRevealed={this.state.isAnswered} isSelected={current.id == this.state.selectedAnswer} />
        </dd>
    })
    let questionContainerClassName = ClassNames({
      'list--unstyled': true,
      'question-container--revealed': this.state.isAnswered
    });
    let btnClassName = ClassNames({
      'btn': true,
      'btn--default': true,
      'invisible': !this.state.isAnswered
    });
    return <fieldset>
      <dl className={questionContainerClassName}>
        <dt className='question'>{`${this.props.q.id}. ${this.props.q.text}`}</dt>
        {answers}
      </dl>
      <div className='button-row'>
        <button className={btnClassName} onClick={this.props.handleNextQuestion}>Next</button>
      </div>
    </fieldset>
  }
}

Question.defaultProps = {
};

Question.propTypes = {
  // text: React.PropTypes.string.isRequired,
  // answers: React.PropTypes.array.isRequired
}

export default Question;