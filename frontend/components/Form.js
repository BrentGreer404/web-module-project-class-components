import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }
  submit = e => {
    e.preventDefault()
    if (this.state.input.length>0){
      this.props.add(this.state.input)
    }
    this.clearInput()
  }
  change = e => {
    this.setState({...this.state, input: e.target.value})
  }
  clearInput = () => {
    this.setState({...this.state, input: ""})
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <input 
          type="text"
          value={this.state.input}
          onChange={this.change}/>
        <button>Add Task</button>
      </form>
    )
  }
}
