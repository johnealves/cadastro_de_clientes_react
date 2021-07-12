import React, { Component } from 'react';
import '../css/LoadingRegistration.css';

class LoadingRegistration extends Component {
  render() {
    return (
      <div className="loadingContainer">
        {/* <div className="spinner" /> */}
        <div class="lds-facebook"><div></div><div></div><div></div></div>
        &nbsp;
        <span>cadastrando...</span>
      </div>
    );
  }
}

export default LoadingRegistration;