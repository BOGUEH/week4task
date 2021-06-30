

var x = 0;

let blue = x>1;
let red = x<1;

document.getElementById('digit').innerHTML = x;

function decrease() {
   document.getElementById('digit').innerHTML = x--;
};

function increase() {
   document.getElementById('digit').innerHTML = x++;
};

function reset() {
   document.getElementById('digit').innerHTML = 0;
};

if (blue) {
   document.getElementById("digit").style.color = "green";
};
 if (red) {
   document.getElementById("digit").style.color = "red";
} 

else {
   document.getElementById("digit").style.color = "black";
};

   
