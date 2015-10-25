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
    
  }

  componentDidMount(){
    this.props.actions.fetchQuizData();
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
      component = <Question q={this.currentQuestion()} handleNextQuestion={this.props.actions.nextQuestion} handleAnswer={this.props.actions.answerQuestion} />
    }
    let source = ( this.props.source.url ? <span>Questions borrowed from <a href={this.props.source.url}>{this.props.source.name}</a></span> : '' );
    return <section>
      <h1 className="h1 quiz__title">{this.props.title}</h1>
      {component}
      <footer>{source}</footer>
    </section>
  }
}

Quiz.defaultProps = {
  // questions: []
};

Quiz.propTypes = {
  id: React.PropTypes.number.isRequired,
}


function mapStateToProps(state) {
  return {
    questions: state.questions,
    title: state.title,
    isLoading: state.isLoading,
    isComplete: state.isComplete,
    currentQuestion: state.currentQuestion,
    source: state.source
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