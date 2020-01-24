import React, { useReducer } from "react";
import reducer from '../reducers';
import "./App.css";
import { SmurfsContext } from '../contexts/SmurfsContext';

const App = () => {

  const [state] = useReducer(reducer, {
    smurfs: [],
    isLoading: false,
    error: null
  });
  
  return (
    <div className="App">
      <SmurfsContext.Provider value={state}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
      </SmurfsContext.Provider>
    </div>
  );
};

export default App;
