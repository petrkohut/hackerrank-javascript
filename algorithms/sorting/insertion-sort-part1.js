function processData(input) {
    var lines = input.split('\n');
    var length = lines[0];
    var data = lines[1].split(' ');
    var val = data[length-1];
    for (var i = length - 1; i >= 0; i--) {
        if (parseInt(val) <= parseInt(data[i-1])) {
            data[i] = data[i-1];
            console.log(data.join(' '));
        } else {
            data[i] = val;
            console.log(data.join(' '));
            break;
        }
    }
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