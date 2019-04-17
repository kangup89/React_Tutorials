import React, {Component} from "react"

function handleClick() {
  console.log("I was clicked");
}

class Tutorial5 extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1 onMouseOver={() => console.log("Hovered!")}>Hover Text!</h1>
        <button onClick={handleClick}>Click me</button>
        <br />
        <br />
        <h1>{this.state.count}</h1>
        <button onClick={this.buttonClick}>Change!</button>
      </div>
    )
  }
}

export default Tutorial5
