

const defaultState = {
  currentQuestion: 0,
  questions: [],
  isLoading: true,
  isComplete: false
};

export default function quizReducer(state = defaultState, action) {
  switch(action.type) {
    case 'REQUEST_QUESTIONS':
      return Object.assign({}, state, {
        isLoading: true
      });
    case 'RECEIVE_QUESTIONS':
      return Object.assign({}, state, {
        questions: action.questions,
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
        isComplete: false
      });
    // case 'CREATE_TODO':
    //   return state.concat(action.text);
    // case 'EDIT_TODO':
    //   return state.set(action.id, action.text);
    // case 'DELETE_TODO':
    //   return state.delete(action.id);
    default:
      return state;
  }
}