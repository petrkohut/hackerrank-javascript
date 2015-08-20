function maxSubarray(input) {
    var currentSum = 0;
    var currentStartIndex = 0;
    var bestSum = 0;
    var bestStartIndex = 0;
    var bestEndIndex = 0;
    var maxNumber = input[0];
    var nonContiguousSum = 0;
    for (var i = 0; i < input.length; i++) {
        if (maxNumber < input[i]) {
            maxNumber = input[i];
        }
        if (input[i] > 0) {
            nonContiguousSum += input[i];
        }
        var val = currentSum + input[i];
        if (val > 0)  {
            if (currentSum === 0) {
                currentStartIndex = i;
            }
            currentSum += input[i];
        } else {
            currentSum = 0;
        }
        if (currentSum > bestSum) {
            bestSum = currentSum;
            bestStartIndex = currentStartIndex;
            bestEndIndex = i;
        }
    }
    if (nonContiguousSum === 0) {
        nonContiguousSum = maxNumber;
    }
    return [input.slice(bestStartIndex, bestEndIndex + 1).reduce(function(previousVal, currentVal) {
        return previousVal + currentVal;
    }, 0), nonContiguousSum];
}

function processData(input) {
    var inputLines = input.split('\n');
    var t = parseInt(inputLines[0]);
    for (var i = 0; i < t; i++) {
        var n = parseInt(inputLines[1 + (i * 2)]);
        var numbers = inputLines[2 + (i * 2)].split(' ').map(function(number) { return parseInt(number); });
        console.log(maxSubarray(numbers).join(' '));
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