import React, {Component} from "react"

class Tutorial10 extends Component {
   constructor() {
      super()
      this.state = {
         firstName: "testfirst",
         lastName: "testlast",
         isFriendly: false,
         gender: "",
         favColor: "blue"
      }
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(event) {
      const {name, value, type, checked} = event.target
      /*this.setState({
         //[event.target.name]: event.target.value
         [name]: value
      })*/
      type === "checkbox" ? this.setState({ [name]: checked }): this.setState({ [name]: value })
   }

   render() {
      return (
         <form>
            <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name"
               onChange={this.handleChange} />
            <br />
            <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name"
               onChange={this.handleChange} />
            <br />

            <textarea value={"Some default value"}
               onChange={this.handleChange} />

            <br />
            <label>
               <input type="checkbox"
                  name="isFriendly"
                  checked={this.state.isFriendly}
                  onChange={this.handleChange} />
               Is firendly?
            </label>
            <br />
            <label>
               <input type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === "male"}
                  onChange={this.handleChange} />
               Male
            </label>
            <br />
            <label>
               <input type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={this.handleChange} />
               Female
            </label>

            <br />
            <label>Favorite Color: </label>
            <select value={this.state.favColor}
               onChange={this.handleChange}
               name="favColor">
               <option value="blue">Blue</option>
               <option value="green">Green</option>
               <option value="red">Red</option>
               <option value="orange">Orange</option>
               <option value="yellow">Yellow</option>
            </select>

            <h2>{this.state.firstName} {this.state.lastName}</h2>
            <h2>You are a {this.state.gender}</h2>
            <h2>Your favorite color is {this.state.favColor}</h2>

            <button>Submit</button>
         </form>
      )
   }
}

export default Tutorial10
