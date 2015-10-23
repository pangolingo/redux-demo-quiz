import React from 'react';
import Answer from './Answer';

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isAnswered: false
    })
  }

  handleAnswer(answer) {
    if(this.state.isAnswered){
      return;
    }
    this.props.handleAnswer(this.props.q.id, answer.id);
    this.setState({
      isAnswered: true
    })
  }

  render() {
    let answers = this.props.q.answers.map((current) => {
      return <dd key={current.id}><Answer a={current} onClick={this.handleAnswer.bind(this, current)} isRevealed={this.state.isAnswered} /></dd>
    })
    return <div>
      <dl>
        <dt>{this.props.q.text}</dt>
        {answers}
      </dl>
      <button onClick={this.props.handleNextQuestion} hidden={!this.state.isAnswered}>Next</button>
    </div>
  }
}

Question.defaultProps = {
};

Question.propTypes = {
  // text: React.PropTypes.string.isRequired,
  // answers: React.PropTypes.array.isRequired
}

export default Question;