
//function getFactorial() {
//    var num = document.getElementById("num").value
//    document.getElementById("fac").innerHTML = "Calculation = " + factorial(num);
//}


//function factorial(num) {
//    if (num == 0) {
//        return 1;
//    }
//    if (num < 0) {
//        return "Please enter a positive number";
//    }
//    else {
//        return num * factorial(num - 1);
//    }
//}

$(document).ready(function() {
    $("#submit").click(function () {
        
            var x = $("#num").val();

            if (x == 0) {
                $("#fac").text('1');
            }
            else if (x < 0) {
                $("#fac").text("Undefined - Please enter a positive number");
            }
            else {
                $("#fac").text(x * arguments.callee(x - 1));
            }
    });
});