import questions from '../data/questions';

export function requestQuestions() {
  return {
    type: 'REQUEST_QUESTIONS'
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


export function receiveQuestions(q) {
  return {
    type: 'RECEIVE_QUESTIONS',
    questions: q
  }
}

export function nextQuestion() {
  return {
    type: 'NEXT_QUESTION'
  }
}

export function restart() {
  return {
    type: 'RESTART'
  }
}