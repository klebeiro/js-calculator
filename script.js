// display variable
const display = document.getElementById("display-text");

// keys variables
const num1 = document.getElementById("calc-1");
const num2 = document.getElementById("calc-2");
const num3 = document.getElementById("calc-3");
const num4 = document.getElementById("calc-4");
const num5 = document.getElementById("calc-5");
const num6 = document.getElementById("calc-6");
const num7 = document.getElementById("calc-7");
const num8 = document.getElementById("calc-8");
const num9 = document.getElementById("calc-9");
const num0 = document.getElementById("calc-0");

// operations variables
const sum = document.getElementById("calc-+");
const subt = document.getElementById("calc--");
const mult = document.getElementById("calc-*");
const div = document.getElementById("calc-/");

// return operation
const equal = document.getElementById("calc-=");

// other
const dot = document.getElementById("calc-.");
const clear = document.getElementById("clear");
let lastChar;

// number typing functions
num1.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "1";

    e.preventDefault;
});

num2.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "2";

    e.preventDefault;
});

num3.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "3";

    e.preventDefault;
});

num4.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "4";

    e.preventDefault;
});

num5.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "5";

    e.preventDefault;
});

num6.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "6";

    e.preventDefault;
});

num7.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "7";

    e.preventDefault;
});

num8.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "8";

    e.preventDefault;
});

num9.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "9";

    e.preventDefault;
});

num0.addEventListener("click", function(e) {
    if(display.innerHTML == "0") {
        display.innerHTML = ""
    }

    display.innerHTML += "0";

    e.preventDefault;
});

// operation functions
sum.addEventListener("click", function(e) {
    lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);
    
    if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") {
        display.innerHTML += "+";
    }

    e.preventDefault;
});

subt.addEventListener("click", function(e) {
    lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);

    if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") {
        display.innerHTML += "-";
    }

    e.preventDefault;
});

mult.addEventListener("click", function(e) {
    lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);

    if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") {
        display.innerHTML += "*";
    }

    e.preventDefault;
});

div.addEventListener("click", function(e) {
    lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);

    if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") {
        display.innerHTML += "/";
    }

    e.preventDefault;
});

dot.addEventListener("click", function(e) {
    lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);

    if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != ".") {
        display.innerHTML += ".";
    }

    e.preventDefault;
});

// return function
equal.addEventListener("click", function(e) {
    let stringOperation = display.innerHTML;
    
    display.innerHTML = eval(stringOperation);

    e.preventDefault;
});

// clear display

clear.addEventListener("click", function(e) {
    if(display.innerHTML.length == 1){
        display.innerHTML = "0";
    } else {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }

    e.preventDefault;
});