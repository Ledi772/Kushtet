alert("Mire se vini")
let fjala = "PC"
let fjalaJem = prompt("Shkruaj fjalen e userit");

if(fjalaJem == "PC"||"pc"||"pC") {
     alert("e sakte")
}

else if (fjala !== fjalaJem) {
    alert("fjala eshte gabim ajo ishte " + fjala); 
}
else if (fjala === ""){
    prompt("shkraj perseri")
}


if (2>3) {
    console.log("2 eshte me i madhe se 3");
}  else{
    console.log("2 eshte me i vogel se 3");
}

//kushti ? kodi nese kushti eshte true : kodi nese kushti eshte false
//ternary operatory => opertori ternar
2>3 ? console.log("2 eshte me i madhe se 3") : console.log("2 eshte me i vogel se 3")

