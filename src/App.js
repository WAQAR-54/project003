import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return  <div >
    Hello World from App.js  Updated

<div>Second Div for print Data {name} your age={age}</div>
<br/>
<Hello firstname={name}></Hello>
  </div>
}

export default App;
