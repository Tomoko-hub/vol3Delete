import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      todos:[
        {id: "1", text:"to do 1"},
        {id: "2", text:"to do 2"},
        {id: "3", text:"to do 3"},
      ]
    };
  }

  deleteTodo(id) {
    let todos=this.state.todos;
    todos = todos.filter((todo)=> todo.id !== id);
    this.setState({todos:todos});
  }

  render() {
    return(
      <ul>
        {
          this.state.todos.map((todo) => {
            return(
              <li key={todo.id}>{todo.text}
                <button onClick={this.deleteTodo.bind(this,todo.id)}>X</button>
              </li>
            )
          })
        }
      </ul>
    )
  }

}

export default App;
