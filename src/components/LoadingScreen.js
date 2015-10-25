import React from 'react';

class LoadingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <div className='loading-screen'>
      <div className="loading-animation">
        <div className="loading-animation__bounce-1"></div>
        <div className="loading-animation__bounce-2"></div>
        <div className="loading-animation__bounce-3"></div>
      </div>
      loading&hellip;
    </div>
  }
}

LoadingScreen.defaultProps = {
};

LoadingScreen.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default LoadingScreen;