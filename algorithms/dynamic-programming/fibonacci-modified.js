function reverseString(input) {
    var result = '';
    for (var i = input.length - 1; i >= 0; i--) {
        result += input.charAt(i);
    }
    return result;
}

function sum(num1, num2) {
    var num1 = reverseString(num1);
    var num2 = reverseString(num2);
    var result = '';
    var rest = 0;
    var length = (num1.length > num2.length) ? num1.length : num2.length;
    for (var i = 0; i < length; i++) {
        var n1 = (num1.charAt(i)) ? parseInt(num1.charAt(i)) : 0;
        var n2 = (num2.charAt(i)) ? parseInt(num2.charAt(i)) : 0;
        var num = ((n1 + n2 + rest) % 10);
        rest = Math.floor((n1 + n2 + rest) / 10);
        result += num.toString();
    }
    if (rest !== 0) {
        result += rest.toString();
    }
    return reverseString(result);
}

function multiplication(num1, num2) {
    var num = (parseInt(num1) > parseInt(num2)) ? num1 : num2;
    var times = (parseInt(num1) > parseInt(num2)) ? num2 : num1;
    var result = '0';
    for (var i = 0; i < times.length; i++) {
        var rest = 0;
        var numLine = '';
        for (var k = 0; k < i; k++) {
            numLine += '0';
        }        
        for (var j = 0; j < num.length; j++) {
            var val = (parseInt(times.charAt(times.length - 1 - i)) * parseInt(num.charAt(num.length - 1 - j)) + rest) % 10;
            rest = Math.floor((parseInt(times.charAt(times.length - 1 - i)) * parseInt(num.charAt(num.length - 1 - j)) + rest) / 10);
            numLine += val.toString();
        }
        if (rest !== 0) {
            numLine += rest.toString();
        }        
        result = sum(result, reverseString(numLine));
    }
    return result;
}

function processData(input) {
    var numbs = input.split(' ');
    var a = numbs[0];
    var b = numbs[1];
    var n = parseInt(numbs[2]);

    for (var i = 2; i < n; i++) {
        oldb = b;
        b = sum(multiplication(b, b), a);
        a = oldb;

    }
    console.log(b);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});