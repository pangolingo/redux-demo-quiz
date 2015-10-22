// import React from 'react';
// import Question from './Question';

// class Questions extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       currentQuestion: 0
//     };
//   }

//   currentQuestion() {
//     return this.props.questions[this.state.currentQuestion];
//   }

//   render() {
//     return <Question text={this.currentQuestion().text} answers={this.currentQuestion().answers} />
//   }
// }

// Questions.defaultProps = {
//   questions: []
// };

// Questions.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   questions: React.PropTypes.array.isRequired
// }

// export default Questions;