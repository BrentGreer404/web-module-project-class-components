import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.toggle(this.props.item)} className='todo'>
        <p>{this.props.item.name}{+this.props.item.done ? " ☒" : " ☐"}</p>
      </div>
    )
  }
}
