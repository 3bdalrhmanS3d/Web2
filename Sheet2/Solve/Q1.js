function FindMaxValue(arguments) {
    if(arguments.length == 0) {
        return 0;
    }

    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

var Lit = [1, -2, 33, 88, 4, 5];

const max = FindMaxValue(Lit);
console.log(max);