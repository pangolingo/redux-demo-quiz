import questions from '../data/questions';

let stats = {
  totalUsers: 1000,
  averageCorrect: 1,
  // 900 users got 1 question correct
  correctAmountsBreakdown: new Map([
    [ 0, 100 ],
    [ 1, 700 ],
    [ 2, 200 ]
  ])
}


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

export function fetchQuestions(){
  return (dispatch) => {
    dispatch(requestQuestions());
    setTimeout(() => {
      dispatch(receiveQuestions(questions))
    }, 1000);
  };
}

export function requestQuestions() {
  return {
    type: 'REQUEST_QUESTIONS'
  }
}

export function receiveQuestions(questions) {
  return {
    type: 'RECEIVE_QUESTIONS',
    questions
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