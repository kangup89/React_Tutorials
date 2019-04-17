import React from "react"

function Header(props) {
  const name = props.name

  return (
    <header>
      <h3 style={{display: name ? "block" : "none"}}>This is my header element</h3>
      <h3 style={{display: !name && "none"}}>Hello {name + "!"}</h3>
    </header>
  )
}

export default Header
