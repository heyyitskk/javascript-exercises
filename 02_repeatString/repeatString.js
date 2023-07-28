const repeatString = function(string, n) {
    let r = '';
    if(n < 0)
        return "ERROR";
    while(n > 0){
        r += string;
        n--;
    }
    return r;
};

// Do not edit below this line
module.exports = repeatString;
