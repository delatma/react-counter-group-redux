import React, { Component } from 'react';
import './App.css';
import CounterGroup from "./components/CounterGroup/CounterGroup"
import CounterWithReduxState from "./components/Counter/CounterWithReduxState";

function App() {
  return (
  	<div className="Counter">
        <CounterWithReduxState/>
      {/*<CounterGroup defaultCounts={3}/>*/}
      </div>
  );
}

export default App;
