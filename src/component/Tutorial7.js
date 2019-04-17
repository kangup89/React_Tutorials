import React, {Component} from "react"

class Tutorial7 extends Component {
   constructor() {
      super()
      this.state = {
         unreadMessages: [
            "Call your mom!",
            "New spam email available."
         ]
      }
   }

   render() {
      return (
         <div>
            {
               this.state.unreadMessages.length > 0 &&
               <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
            }
         </div>
      )
   }
}

export default Tutorial7
