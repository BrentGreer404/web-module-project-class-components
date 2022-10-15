import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>Todos
        {console.log(this.props.todos)}
        {this.props.todos.map(item => (
          <Todo item={item} key={item.id}></Todo>
        ))}
      </div>
    )
  }
}
