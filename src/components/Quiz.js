import React from 'react';
import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen';
import EndScreen from './EndScreen';
// import Questions from './Questions';
import Question from './Question';
import ErrorScreen from './ErrorScreen';
import * as actionCreators from '../actions/QuizActions';
import { bindActionCreators } from 'redux';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.props.actions.fetchQuestions();
  }

  currentQuestion() {
    let question = this.props.questions[this.props.currentQuestion];
    if( undefined === question ){
      throw "Question is not defined"
    }
    return question;
  }

  render() {
    let component;
    if(this.props.isLoading){
      component = <LoadingScreen title={this.props.title} />
    } else if( this.props.questions.length < 1 ) {
      component = <ErrorScreen message="No questions are available" />
    } else if(this.props.isComplete) {
      component = <EndScreen title={this.props.title} handleRestart={this.props.actions.restart} />
    } else {
      component = <Question text={this.currentQuestion().text} answers={this.currentQuestion().answers} handleNextQuestion={this.props.actions.nextQuestion} />
    }
    return <section>{component}</section>
  }
}

Quiz.defaultProps = {
  // questions: []
};

Quiz.propTypes = {
  title: React.PropTypes.string.isRequired,
  questions: React.PropTypes.array.isRequired
}


function mapStateToProps(state) {
  return {
    questions: state.questions,
    isLoading: state.isLoading,
    isComplete: state.isComplete,
    currentQuestion: state.currentQuestion
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);


// export default Quiz;