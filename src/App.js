import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux
          </h2>
          <Router>

            <div className="TodoApp">
              <Message/>
              <TodoForm/>
              <Route path='/:filter?' render = {({match}) => (
                <TodoList filter={match.params.filter}/>
              )}>
            </Route>
              <Footer/>
            </div>
          </Router>
        </div>


      </div>
    );
  }
}

export default App
