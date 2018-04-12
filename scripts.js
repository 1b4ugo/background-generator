var cssCode = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("generate");

// Set initial colors
var startColor1 = "#8963df";
var startColor2 = "#ffacb1"

body.style.background = "linear-gradient(to right, " + startColor1 + ", " + startColor2 + ")";
color1.value = startColor1;
color2.value = startColor2;
cssCode.textContent = body.style.background;


// 1st Test to see if we have variables cached
// console.log(css);
// console.log(color1);
// console.log(color2);

// color1.addEventListener("input", function(){
// 	//2nd test console.log(color1.value);
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// })
// color2.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })

// Now looking at the above, we can simply. Do not repeat yourself (DRY)
// create a function


function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssCode.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Random color generator
function randomColor() {
  var hex = (Math.round(Math.random()*0xffffff)).toString(16);
  while (hex.length < 6) hex = "0" + hex;
  return hex;
}

random.addEventListener("click", function(){
	// console.log("GENERATE COLORS!");
	color1.value = "#" + randomColor();
	color2.value = "#" + randomColor();
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssCode.textContent = body.style.background;
	
});