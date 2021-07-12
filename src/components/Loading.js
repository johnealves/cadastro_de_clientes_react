import React, { Component } from 'react';
import '../css/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loadingContainer">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <span>Carregando...</span>
      </div>
    );
  }
}

export default Loading;