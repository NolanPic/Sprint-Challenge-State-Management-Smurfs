import React, { useReducer } from "react";
import reducer from '../reducers';
import "./App.css";
import { SmurfsContext } from '../contexts/SmurfsContext';

import AddSmurf from '../components/AddSmurf';
import SmurfList from '../components/SmurfList';

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    smurfs: [],
    editingSmurf: null,
    isLoading: false,
    error: null
  });
  
  return (
    <div className="App">
      <SmurfsContext.Provider value={{ state, dispatch }}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf />
        <SmurfList />
      </SmurfsContext.Provider>
    </div>
  );
};

export default App;
