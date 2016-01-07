
function getFactorial() {
    var num = document.getElementById("num").value
    document.getElementById("fac").innerHTML = "Calculation = " + factorial(num);
}


function factorial(num) {
    if (num == 0) {
        return 1;
    }
    if (num < 0) {
        return "Please enter a positive number";
    }
    else {
        return num * factorial(num - 1);
    }
}