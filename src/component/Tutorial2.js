import React, {Component} from "react"
import todosData from "./todosData.js"

function TodoText(props) {
   const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
   }

   return (
      <div className="todo-item">
         <input
             type="checkbox"
             checked={props.item.completed}
             onChange={() => props.handleChange(props.item.id)}
         />
         <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
      </div>
   )
}

class Tutorial2 extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
      })
  }

  render() {
    //const todoItems = this.state.todos.map(item => <TodoText key={item.id} item={item} />)
    const todoItems = this.state.todos.map(item => <TodoText key={item.id} item={item}
      handleChange={this.handleChange} />)

    return (
        <div className="todo-list">
          {todoItems}
        </div>
    )
  }
}

export default Tutorial2
