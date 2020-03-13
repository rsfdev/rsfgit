

window.onload = function() {
    alert("Page Loaded")
}

console.log("Loading Page")

// Events don't consider the sequence of commands

let bodyChild = document.createElement("h1");
bodyChild.innerHTML = "Exercises 4.6 - JavaScript";
document.body.appendChild(bodyChild);


// element.addingevent('click', function() {
//  command("anything")
// })

let button = document.getElementById("btn");
let title = document.querySelector(".title");

button.addEventListener('click', function() {
    alert("You just clicked")
    title.remove();
});

let buttonc = document.getElementById("btnc").value;

//buttonc.addEventListener('change', function() {
//    console.log("You selected: " + buttonc);
//});

let buttono = document.getElementById("btno");

buttono.addEventListener('mouseover', function() {
    console.log("Mouseover event!");
});

let buttonk = document.getElementById("btnk");

buttonk.addEventListener('keyup', function() {
    console.log("Keyup event!");
});


