const reverseString = function(string) {
    let r = '';
    for(const ch of string){
        r = ch + r;
    }
    return r;
};

// Do not edit below this line
module.exports = reverseString;
