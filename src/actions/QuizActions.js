import quiz from '../data/quiz';
import stats from '../data/stats';


export function fetchStats(){
  return (dispatch) => {
    dispatch(requestStats());
    setTimeout(() => {
      dispatch(receiveStats(stats))
    }, 1000);
  };
}

export function requestStats() {
  return {
    type: 'REQUEST_STATS'
  }
}

export function receiveStats(stats) {
  return {
    type: 'RECEIVE_STATS',
    stats
  }
}

export function fetchQuizData(){
  return (dispatch) => {
    dispatch(requestQuizData());
    setTimeout(() => {
      dispatch(receiveQuizData(quiz))
    }, 2000);
  };
}

export function requestQuizData() {
  return {
    type: 'REQUEST_QUIZ_DATA'
  }
}

export function receiveQuizData(data) {
  return {
    type: 'RECEIVE_QUIZ_DATA',
    data
  }
}

export function nextQuestion() {
  return {
    type: 'NEXT_QUESTION'
  }
}

export function answerQuestion(questionID, answerID) {
  return {
    type: 'ANSWER_QUESTION',
    questionID,
    answerID
  }
}

export function restart() {
  return {
    type: 'RESTART'
  }
}