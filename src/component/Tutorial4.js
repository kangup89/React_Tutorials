import React, {Component} from "react"

class Tutorial4 extends Component {
  constructor() {
    super()
    this.state = {
      name: "kangup",
      age: "30",
      isLoggedIn: true
    }
  }

  render() {
    let wordDisplay
    if (this.state.isLoggedIn === true) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }

    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
        <br />
        <br />
        <h1>You are Currently logged {wordDisplay}</h1>
      </div>
    )
  }
}

export default Tutorial4
