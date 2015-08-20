function processData(input) {
    var text = input.split('\n')[0].toLowerCase();

    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (var i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
            var index = text.charCodeAt(i) - 97;
            abc[index] = '0';
        }
        if (abc.join('') === '00000000000000000000000000') {
            console.log('pangram');
            return;
        }
    }
    console.log('not pangram');
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