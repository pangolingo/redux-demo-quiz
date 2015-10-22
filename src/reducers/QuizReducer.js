import questions from '../data/questions'

const defaultState = {
  currentQuestion: 0,
  questions: [],
  questionsAreLoaded: false
};

export default function quizReducer(state = defaultState, action) {
  switch(action.type) {
    case 'LOAD_QUESTIONS':
      return Object.assign({}, state, {
        questions: questions,
        questionsAreLoaded: true
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