import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <button>Add Task</button>
        <div>
          <button onClick={this.props.clear()}>Hide Completed</button>
        </div>
        
      </div>
    )
  }
}
