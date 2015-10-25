import React from 'react';
import * as actionCreators from '../actions/QuizActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EndScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.possibleScoreTexts = new Map([
      [ 0.99, "You Killed It!" ],
      [ 0.50, "You Did Okay!" ],
      [ 0.33, "You Have Done Very Bad" ],
    ]);
  }

  componentDidMount(){
    this.props.actions.fetchStats();
  }

  correctQuestions(){
    return this.props.questions.filter(question => {
      let correctAnswer = question.answers.find(answer => answer.correct );
      let userAnswer = this.props.userAnswers.get(question.id);
      return userAnswer == correctAnswer.id;
    });
  }

  percentCorrect(){
    return this.correctQuestions().length / this.props.questions.length;
  }

  scoreText(){
    let percentCorrect = this.percentCorrect();
    let selectedText;
    for (var [score, text] of this.possibleScoreTexts) {
      selectedText = text;
      if( score <= percentCorrect ){
        break;
      }
    }
    return selectedText;
  }

  betterThanX(){
    if( !this.props.stats ){
      return;
    }
    let x = 0;
    let userNumberCorrect = this.correctQuestions().length;
    for(var [numberCorrect, numberOfUsers] of this.props.stats.correctAmountsBreakdown){
      if( userNumberCorrect <= numberCorrect ){
        break;
      }
      x += numberOfUsers;
    }
    return Math.floor(x / this.props.stats.totalUsers * 100);
  }


  render() {
    let betterThanX = this.betterThanX();
    if(betterThanX){
      betterThanX = `You are better than ${betterThanX}% of everyone else who took this quiz.`;
    } else {
      betterThanX = '';
    }
    return <div className='end-screen'>
    <span className="end-screen__number-correct">{`${this.correctQuestions().length}/${this.props.questions.length} questions correct`}</span>
      <h2 className="h2 end-screen__outcome-text">{this.scoreText()}</h2>
      <span clasName="end-screen__better-than">{betterThanX}</span>
      <div className='button-row'>
        <button className="btn btn--default" onClick={this.props.handleRestart}>Restart</button>
      </div>
    </div>
  }
}

EndScreen.defaultProps = {
};

EndScreen.propTypes = {
  title: React.PropTypes.string.isRequired
}



function mapStateToProps(state) {
  return {
    userAnswers: state.userAnswers,
    questions: state.questions,
    stats: state.stats
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndScreen);


// export default EndScreen;