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