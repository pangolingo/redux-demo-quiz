import React from 'react';
import LoadingScreen from './LoadingScreen';
import EndScreen from './EndScreen';
// import Questions from './Questions';
import Question from './Question';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currentQuestion: 0
    };
  }

  currentQuestion() {
    return this.props.questions[this.state.currentQuestion];
  }

  isComplete() {
    return this.state.currentQuestion === this.props.questions.length -1;
  }

  render() {
    let component;
    if(this.state.loading){
      component = <LoadingScreen title={this.props.title} />
    } else if(this.isComplete()) {
      component = <EndScreen title={this.props.title} />
    } else {
      // component = <Questions title={this.props.title} questions={this.props.questions} />
      component = <Question text={this.currentQuestion().text} answers={this.currentQuestion().answers} />
    }
    return <section>{component}</section>
  }
}

Quiz.defaultProps = {
  questions: []
};

Quiz.propTypes = {
  title: React.PropTypes.string.isRequired,
  questions: React.PropTypes.array.isRequired
}

export default Quiz;