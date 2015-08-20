function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines[0]);
    var s = lines[1];
    var k = parseInt(lines[2]);
    k = (k % 26);
    // A-Z = 65-90
    // a-z = 97-122
    var result = '';
    for (var i = 0; i < n; i++) {
        var actualChar = s.charCodeAt(i);
        var newChar = 0;
        if ((actualChar >= 65 && actualChar <= 90) || (actualChar >= 97 && actualChar <= 122)) {
            newChar = actualChar + k;
            if ((newChar > 90 && actualChar <=90) || (newChar > 122 && actualChar >= 97)) {
                newChar -= 26;
            }
        } else {
            newChar = actualChar;
        }
        result += String.fromCharCode(newChar);
    }
    console.log(result);
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