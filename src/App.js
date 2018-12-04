import React, { Component } from 'react';
import List from './List';
import ToDoList from './ToDoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <ToDoList />
      </div>
    );
  }
}

export default App;
