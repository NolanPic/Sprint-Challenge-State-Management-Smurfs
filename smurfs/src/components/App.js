import React, { Component } from "react";
import "./App.css";
import { SmurfsContext } from '../contexts/SmurfsContext';
class App extends Component {

  state = {
    smurfs: [],
    isLoading: false,
    error: null
  };

  render() {
    return (
      <div className="App">
        <SmurfsContext.Provider value={this.state}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </SmurfsContext.Provider>
      </div>
    );
  }
}

export default App;
