import React from 'react';

class ErrorScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <em>{this.props.message}</em>
  }
}

ErrorScreen.defaultProps = {};

ErrorScreen.propTypes = {
  message: React.PropTypes.string.isRequired
}

export default ErrorScreen;