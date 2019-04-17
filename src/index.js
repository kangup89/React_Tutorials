import React from "react"
import ReactDOM from "react-dom"
import './style.css'
import Tutorial1 from "./component/Tutorial1.js"
import Tutorial2 from "./component/Tutorial2.js"
import Tutorial3 from "./component/Tutorial3.js"
import Tutorial4 from "./component/Tutorial4.js"
import Tutorial5 from "./component/Tutorial5.js"
import Tutorial6 from "./component/Tutorial6.js"
import Tutorial7 from "./component/Tutorial7.js"
import Tutorial8 from "./component/Tutorial8.js"
import Tutorial9 from "./component/Tutorial9.js"
import Tutorial10 from "./component/Tutorial10.js"
import Tutorial11 from "./component/Tutorial11.js"

// render only single JSX component
// (What do i want to render, Where do i want to render it)

var tutorials = ["tutorial1", "tutorial2", "tutorial3", "tutorial4",
"tutorial5", "tutorial6", "tutorial7", "tutorial8", "tutorial9", "tutorial10", "tutorial11"]
var importTutorials = [<Tutorial1 />, <Tutorial2 />, <Tutorial3 />,
<Tutorial4 />, <Tutorial5 />, <Tutorial6 />, <Tutorial7 />, <Tutorial8 />,
<Tutorial9 />, <Tutorial10 />, <Tutorial11 />]

tutorials.forEach(function(tutorial) {
   var li = document.createElement("li")
   var text = document.createTextNode(tutorial)
   li.appendChild(text)
   document.getElementById("myDropdownUl").appendChild(li)
})

document.getElementById("dropButton").addEventListener("click", openDropdown, false)

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

var tutorialNr = ""

function showTutorial() {
  ReactDOM.render(
    tutorialNr,
    document.getElementById("root")
  );
}

let j = 0
importTutorials.forEach(function(i) {
   document.getElementById("myDropdownUl").childNodes[j].addEventListener("click", function(){
     tutorialNr = i
     showTutorial()
   })
   j++
})

// Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
