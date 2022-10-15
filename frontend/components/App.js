import React from 'react'
import Form from "./Form"
import TodoList from "./TodoList"

const todos = [
  {
    name: "Bark the dogs",
    id: 123,
    done: false
  },
  {
    name: "Oink the pigs",
    id: 234,
    done: false
  },{
    name: "Moo the cows",
    id: 345,
    done: false
  },
]

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}></TodoList>
        <Form></Form>
        <button>Hide Completed</button>
      </div>
    )
  }
}
