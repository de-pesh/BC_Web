let myDiv = document.getElementById("buttonArea");
let button = document.createElement('BUTTON');

let text = document.createTextNode("ADDRESS: " );


button.style.width = "100%";
button.style.marginBottom = "50px";
button.style.fontSize = "large";
button.style.background = "#aff2ff";

// button2.style.marginBottom = "10px";
// button2.style.fontSize = "large";
// button2.style.background = "#aff2ff";
// button2.style.width = "100%";


// appending text to button
button.appendChild(text);
// button2.appendChild(text2);
// appending button to div
// myDiv.appendChild(button2);
myDiv.appendChild(button);;