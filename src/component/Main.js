import React from "react"

function Main() {
  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay

  const styles = {
    backgroundColor : 'black',
    fontSize: 24
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "red"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "blue"
  } else {
    timeOfDay = "night"
    styles.color = "purple"
  }

  return (
    <div id="main">
      <h2 style={{color: 'white', backgroundColor: 'black'}}>Good {timeOfDay}</h2>
      <h2 style={styles}>Good {timeOfDay}</h2>
    </div>
  )
}

export default Main
