import React from 'react';
import Answer from './Answer';

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let answers = this.props.answers.map((current) => {
      return <dd key={current.id}><Answer text={current.text} correct={current.correct} /></dd>
    })
    return <div>
      <dl>
        <dt>{this.props.text}</dt>
        {answers}
      </dl>
      <button>Next</button>
    </div>
  }
}

Question.defaultProps = {
};

Question.propTypes = {
  text: React.PropTypes.string.isRequired,
  answers: React.PropTypes.array.isRequired
}

export default Question;