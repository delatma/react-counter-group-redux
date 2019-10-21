import React, { Component } from 'react';
import './App.css';
import CounterGroup from "./components/CounterGroup/CounterGroup"

function App() {
  return (
  	<div className="Counter">
      <CounterGroup defaultCounts={3}/>
      </div>
  );
}

export default App;
