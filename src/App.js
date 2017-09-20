import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux
          </h2>
          <div className="TodoApp">
            <TodoForm/>
            <TodoList/>
          </div>
        </div>


      </div>
    );
  }
}

export default App
