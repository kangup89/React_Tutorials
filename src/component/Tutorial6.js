import React, {Component} from "react"

function Conditional(props) {
   console.log(props.isLoading)
   // condition ? statement if true : statement if false
   return (
      /*<div>
         {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
      </div>*/
      <h1>Some cool stuff about conditional rendering</h1>
   )

   /*if (props.isLoading === true) {
      return (
         <h1>Loading...</h1>
      )
   }
   return (
      <h1>Some cool stuff about conditional rendering</h1>
   )*/
}

class Tutorial6 extends Component {
   constructor() {
      super()
      this.state = {
         isLoading: true
      }
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({
            isLoading: false
         })
      }, 1500)
   }

   render() {
      return (
         <div>
            {this.state.isLoading ?
               <h1>Loading</h1> :
                  <Conditional isLoading={this.state.isLoading}/>}
         </div>
      )
   }
}

export default Tutorial6
