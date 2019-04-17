import React, {Component} from "react"

/*
function Tutorial3(props) {
  return (
    <div>
      <h1>props.whatever</h1>
    </div>
  )
}
*/

class Tutorial3 extends React.Component {
  render() {
    return (
      <div>
        <Header username = "kangup"/>
        <Greeting />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

class Greeting extends Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }

    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}

export default Tutorial3
