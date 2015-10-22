import React from 'react';

class LoadingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <div>
      <h1>{this.props.title}</h1>
      loading...
    </div>
  }
}

LoadingScreen.defaultProps = {
};

LoadingScreen.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default LoadingScreen;