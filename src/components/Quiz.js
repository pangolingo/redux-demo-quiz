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
    this.state = {
      questionsAreLoaded: false,
      currentQuestion: 0,
      complete: false
    };

    // this.props.dispatch(this.props.actions.loadQuestions());
    // this.props.actions.loadQuestions();
    window.setTimeout(this.props.actions.loadQuestions, 1000);
  }

  currentQuestion() {
    let question = this.props.questions[this.state.currentQuestion];
    if( undefined === question ){
      throw "Question is not defined"
    }
    return question;
  }

  handleNextQuestion() {
    let currentQuestion = this.state.currentQuestion + 1;
    let complete = this.state.complete;
    if(currentQuestion >= this.props.questions.length){
      complete = true;
      currentQuestion = 0;
    }
    this.setState({ currentQuestion, complete });
  }

  isComplete() {
    return this.state.complete;
  }

  render() {
    console.log(this.state)
    let component;
    if(!this.props.questionsAreLoaded){
      component = <LoadingScreen title={this.props.title} />
    } else if( this.props.questions.length < 1 ) {
      component = <ErrorScreen message="No questions are available" />
    } else if(this.state.complete) {
      component = <EndScreen title={this.props.title} />
    } else {
      // component = <Questions title={this.props.title} questions={this.props.questions} />
      component = <Question text={this.currentQuestion().text} answers={this.currentQuestion().answers} handleNextQuestion={this.handleNextQuestion.bind(this)} />
    }
    return <section>{component}</section>
  }
}

Quiz.defaultProps = {
  // questions: []
};

Quiz.propTypes = {
  title: React.PropTypes.string.isRequired,
  // questions: React.PropTypes.array.isRequired
}


function mapStateToProps(state) {
  return {
    questions: state.questions,
    questionsAreLoaded: state.questionsAreLoaded
    // currentQuestion: state.currentQuestion
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onRequestQuestions: () => dispatch(loadQuestions())
//   };
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);


// export default Quiz;