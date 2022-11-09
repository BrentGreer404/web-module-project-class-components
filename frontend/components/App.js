import React from 'react'
import Form from "./Form"
import TodoList from "./TodoList"




export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
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
      ], 
    }
  }

  clearComplete = () => {
    this.setState({...this.state, todos: this.state.todos.filter((v) => v.done === false)})
    console.log("Clear")
  }
  addTask = (task) => {

  }
  toggleComplete = (item) => {
    this.setState({...this.state, todos: this.state.todos.map((v) => {
      if (v.id === item.id) {
        return {...v, done: !item.done}
      }
      return v
    })})
  }

  render() {
    return (
      <div>
        <TodoList 
        todos={this.state.todos}
        toggle={(i) => this.toggleComplete(i)}>
        </TodoList>
        <Form 
          clear={() => this.clearComplete}>
        </Form>
      </div>
    )
  }
}
