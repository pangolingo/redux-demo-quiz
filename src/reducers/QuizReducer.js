const defaultState = {
  title: '',
  currentQuestion: 0,
  questions: [],
  isLoading: true,
  isComplete: false,
  userAnswers: new Map(),
  stats: null,
  source: {}
};

export default function quizReducer(state = defaultState, action) {
  switch(action.type) {
    case 'REQUEST_QUIZ_DATA':
      return Object.assign({}, state, {
        isLoading: true
      });
    case 'RECEIVE_QUIZ_DATA':
      return Object.assign({}, state, {
        questions: action.data.questions,
        title: action.data.title,
        source: action.data.source,
        isLoading: false
      });
    case 'NEXT_QUESTION':
      let nextQuestion = state.currentQuestion + 1;
      let isComplete = false;
      if(nextQuestion >= state.questions.length){
        isComplete = true;
        nextQuestion = 0;
      }
      return Object.assign({}, state, {
        currentQuestion: nextQuestion,
        isComplete: isComplete
      });
    case 'RESTART':
      return Object.assign({}, state, {
        currentQuestion: 0,
        isComplete: false,
        userAnswers: new Map()
      });
    case 'ANSWER_QUESTION':
      let newUserAnswers = new Map(state.userAnswers);
      newUserAnswers.set(action.questionID, action.answerID);
      return Object.assign({}, state, {
        userAnswers: newUserAnswers
      });
    case 'RECEIVE_STATS':
      return Object.assign({}, state, {
        stats: action.stats
      });
    default:
      return state;
  }
}